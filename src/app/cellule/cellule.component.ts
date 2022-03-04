import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { CelluleService } from './cellule.service';

@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {

  cellules:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any
  username:any
  nom:any
  prenom:any

  celluleAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    reference:0,
    president: '',
    membre1: '',
    membre2:'',


  };
  submitted = false;

  constructor(private cellule:CelluleService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {

    this.username=this.token.getInfos().username;


 this.userService.getbyid(this.user,this.username).subscribe((result:any)=>{

  this.user=result
  this.prenom=this.user.prenom;
  this.nom=this.user.nom;
},
(error)=>{
 alert('error')
}

);

this.userService.getUsers().subscribe((result:any)=>{

  this.users=result

},
(error)=>{
 alert('error')
}

);


    this.cellule.getCellules().subscribe((result:any)=>{
      console.log(result)
      this.cellules=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createCellule(): void {
    const data = {
      reference: this.celluleAdd.reference,
      president: this.celluleAdd.president,
      membre1: this.celluleAdd.membre1,
      membre2: this.celluleAdd.membre2


    };

    this.cellule.createCellule(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `cellule a été ajouté avec succès`

        );
        this.celluleAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          reference:0,
          president: '',
          membre1: '',
          membre2:'',

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
      });

}




Annuler(){
  this.celluleAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    reference:0,
    president: '',
    membre1: '',
    membre2:'',


  };
}


deleteCellule(Pat:any) {
  this.cellule.deleteCellule(Pat).subscribe(
    (data)=>{
      this.toaster.error(`cellule a été supprimé avec succès`);

  });


}

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }
  home():void{
    this.router.navigate(['homeRes'])
  }
}
