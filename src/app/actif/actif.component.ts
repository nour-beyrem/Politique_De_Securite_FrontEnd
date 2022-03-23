import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { ActifService } from './actif.service';

@Component({
  selector: 'app-actif',
  templateUrl: './actif.component.html',
  styleUrls: ['./actif.component.css']
})
export class ActifComponent implements OnInit {

  actifs:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any
  username:any
  nom:any
  prenom:any

  actifAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    reference:0,
    nom: '',
    type: '',
    adresseIP:'',
    localisation:'',
    genre:'',
    serveurApplication:'',
    bd:'',
    os:'',
    dmia:'',
    criticiteCID:'',
    proprietaire:'',


  };
  submitted = false;

  constructor(private actif:ActifService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
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


    this.actif.getActifs().subscribe((result:any)=>{
      console.log(result)
      this.actifs=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createActif(): void {
    const data = {
      reference: this.actifAdd.reference,
      nom: this.actifAdd.nom,
    type: this.actifAdd.type,
    adresseIP:this.actifAdd.adresseIP,
    localisation:this.actifAdd.localisation,
    genre:this.actifAdd.genre,
    serveurApplication:this.actifAdd.serveurApplication,
    bd:this.actifAdd.bd,
    os:this.actifAdd.os,
    dmia:this.actifAdd.dmia,
    criticiteCID:this.actifAdd.criticiteCID,
    proprietaire:this.actifAdd.proprietaire,


    };

    this.actif.createActif(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `actif a été ajouté avec succès`

        );
        this.actifAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          reference:0,
          nom: '',
          type: '',
          adresseIP:'',
          localisation:'',
          genre:'',
          serveurApplication:'',
          bd:'',
          os:'',
          dmia:'',
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
  this.actifAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    reference:0,
    nom: '',
    type: '',
    adresseIP:'',
    localisation:'',
    genre:'',
    serveurApplication:'',
    bd:'',
    os:'',
    dmia:'',
    criticiteCID:'',
    proprietaire:'',


  };
}


deleteActif(Pat:any) {
  this.actif.deleteActif(Pat).subscribe(
    (data)=>{
      this.toaster.error(`actif a été supprimé avec succès`);

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
