import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentification/auth.service';
import { TokenService } from 'src/app/authentification/token.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { CelluleService } from 'src/app/cellule/cellule.service';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-reunion-c',
  templateUrl: './reunion-c.component.html',
  styleUrls: ['./reunion-c.component.css']
})
export class ReunionCComponent implements OnInit {

  reunions:any
  cellules:any;
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any


  reunionAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    ordreDuJour: '',
    discussion: '',
    decision:'',
    lieu:'',
    Date:'',
    cellule:'',


  };
  submitted = false;

  constructor(private cellule:CelluleService,private reunion:ReunionService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {



    this.reunion.getReunions().subscribe((result:any)=>{
      console.log(result)
      this.reunions=result
    },
    (error)=>{
     alert('error')
    }

    )
    this.cellule.getCellules().subscribe((result:any)=>{
      console.log(result)
      this.cellules=result
    },
    (error)=>{
     alert('error')
    }

    )

  }


  createReunion(): void {
    const data = {
      ordreDuJour: this.reunionAdd.ordreDuJour,
      discussion: this.reunionAdd.discussion,
      decision: this.reunionAdd.decision,
      lieu: this.reunionAdd.lieu,
      Date: this.reunionAdd.Date,
      cellule:this.reunionAdd.cellule


    };

    this.reunion.createReunion(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `reunion du cellule a été ajouté avec succès`

        );
        console.log(this.reunionAdd)
        this.reunionAdd={
          createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    ordreDuJour: '',
    discussion: '',
    decision:'',
    lieu:'',
    Date:'',
    cellule:'',

        };

        this.submitted = true;

      },
      (error) => {
        console.log(this.reunionAdd)
        console.log(error);
        this.toaster.error('vous devez verifier vos champs ')
      });

}


Recherche(){
  this.reunion.getReunion(this.id).subscribe((result:any)=>{
    console.log(result)
    this.reunions=result
  },
  (error)=>{
   alert(error)
  }

  )
}

Annuler(){
  this.reunionAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    ordreDuJour: '',
    discussion: '',
    decision:'',
    lieu:'',
    Date:'',
    cellule:'',


  };
}


deleteReunion(Pat:any) {
  this.reunion.deleteReunion(Pat).subscribe(
    (data)=>{
      this.toaster.error(`reunion a été supprimé avec succès`);

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
