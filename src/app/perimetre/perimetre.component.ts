import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { PerimetreService } from './perimetre.service';

@Component({
  selector: 'app-perimetre',
  templateUrl: './perimetre.component.html',
  styleUrls: ['./perimetre.component.css']
})
export class PerimetreComponent implements OnInit {

  perimetres:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any
  username:any
  nom:any
  prenom:any

  perimetreAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',

    nom: '',
    controleAcces: '',
    mesureSecurite:'',
    criticiteCID:'',
    proprietaire:'',



  };
  submitted = false;

  constructor(private perimetre:PerimetreService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
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


    this.perimetre.getPerimetres().subscribe((result:any)=>{
      console.log(result)
      this.perimetres=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createPerimetre(): void {
    const data = {

      nom: this.perimetreAdd.nom,

      controleAcces: this.perimetreAdd.controleAcces,
      mesureSecurite:this.perimetreAdd.mesureSecurite,
      criticiteCID:this.perimetreAdd.criticiteCID,
      proprietaire:this.perimetreAdd.proprietaire,



    };

    this.perimetre.createPerimetre(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `perimetre a été ajouté avec succès`

        );
        this.perimetreAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          nom: '',
          controleAcces: '',
          mesureSecurite:'',
          criticiteCID:'',
          proprietaire:'',

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
      });

}




Annuler(){
  this.perimetreAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    nom: '',
    controleAcces: '',
    mesureSecurite:'',
    criticiteCID:'',
    proprietaire:'',


  };
}


deletePerimetre(Pat:any) {
  this.perimetre.deletePerimetre(Pat).subscribe(
    (data)=>{
      this.toaster.error(`perimetre a été supprimé avec succès`);

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
