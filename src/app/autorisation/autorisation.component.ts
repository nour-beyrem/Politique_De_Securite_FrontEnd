import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActifService } from '../actif/actif.service';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { AutorisationService } from './autorisation.service';

@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {

  autorisations:any
  actifs:any
  users:any
  id:string="";
  auth:any;
role:any
  user:any
  username:any
  nom:any
  prenom:any
  pre:any
  partenaire:any
  ref:any




  autorisationAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
id:'',
    lieuAffectation: '',
    actif:'',
    Date: '',
  //  DateOK:'',
    Definitive:'',
    temporaireDe:'',
    temporaireAu:'',
    //signature:false,
    //internet:false,
   // reseau:false,
   // verif:false,
   // verif1:false,
   // verif2:false,
    user:'',
   // responsable:''



  };
  submitted = false;

  constructor(private autorisation:AutorisationService, private actif:ActifService,private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {

    this.username=this.token.getInfos().role;
    this.nom=this.token.getInfos().username;
this.role=this.token.getInfos().role




this.userService.getUsers().subscribe((result:any)=>{

  this.users=result

},
(error)=>{
 alert('error')
}



);



this.actif.getActifs().subscribe((result:any)=>{

  this.actifs=result

},
(error)=>{
 alert('error')
}

);


    this.autorisation.getAutoriations().subscribe((result:any)=>{
      console.log(result)
      this.autorisations=result
    },
    (error)=>{
     alert('error')
    }

    )




  }

  Rechercher()
  {
    this.autorisation.getAutoriation(this.ref).subscribe((result:any)=>{
      console.log(result)
      this.autorisations=result
    },
    (error)=>{
     alert('error')
    }

    )
  }

  createAutorisation(): void {
    const data = {
      id:this.autorisationAdd.id,
    lieuAffectation: this.autorisationAdd.lieuAffectation,
    Date: this.autorisationAdd.Date,
    actif:this.autorisationAdd.actif,
  //  DateOK:this.autorisationAdd.DateOK,
    Definitive:this.autorisationAdd.Definitive,
    temporaireDe:this.autorisationAdd.temporaireDe,
    temporaireAu:this.autorisationAdd.temporaireAu,
    //signature:this.autorisationAdd.signature,
    //internet:this.autorisationAdd.internet,
    //reseau:this.autorisationAdd.reseau,
   // verif:this.autorisationAdd.verif,
   // verif1:this.autorisationAdd.verif1,
   // verif2:this.autorisationAdd.verif2,
    user:this.nom,
    //responsable:this.autorisationAdd.responsable
    };
console.log(data)
    this.autorisation.createAutoriation(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `autorisation d'utilisation d'actif a été ajouté avec succès`

        );
        this.autorisationAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          id:'',
          lieuAffectation: '',
          actif:'',
    Date: '',
    //DateOK:'',
    Definitive:'',
    temporaireDe:'',
    temporaireAu:'',
   // signature:false,
    //internet:false,
    //reseau:false,
  //  verif:false,
  //  verif1:false,
   // verif2:false,
    user:'',
   // responsable:''

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);

      });

}




Annuler(){
  this.autorisationAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    lieuAffectation: '',
    actif:'',
    Date: '',
  //  DateOK:'',
    Definitive:'',
    temporaireDe:'',
    temporaireAu:'',
   // signature:false,
   // internet:false,
   // reseau:false,
   // verif:false,
   // verif1:false,
   // verif2:false,
    user:'',
  //  responsable:''


  };
}


deleteAutorisation(Pat:any) {
  this.autorisation.deleteAutoriation(Pat).subscribe(
    (data)=>{
      this.toaster.error(`autorisation d'utilisation d'actif a été supprimé avec succès`);

  });


}

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }

  home():void{
    if (this.username=== "responsable")
     this.router.navigate(['homeRes'])
    else
       this.router.navigate(['homeRes'])
  }


}
