import { ExterneService } from './../externe/externe.service';
import { ActifService } from './../actif/actif.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { SortieService } from './sortie.service';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent implements OnInit {

  sorties:any
  actifs:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any
  username:any
  nom:any
  prenom:any
  partenaire:any
  type:string="partenaire"

  sortieAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',

    naturePanne: '',
    Date: '',
    dateSortie:'',
    dateRestitution:'',
    etatGeneral:'',
    observation:'',
    agentS:'',
    responsable:'',
    actifS:'',



  };
  submitted = false;

  constructor(private externe:ExterneService,private sortie:SortieService, private actif:ActifService,private userService : UserAuthService,public router: Router,private toaster: ToastrService,
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

this.externe.getExterneByType(this.type).subscribe((result:any)=>{
  console.log(result)
  this.partenaire=result
},
(error)=>{
 alert('error')
}

)

this.actif.getActifs().subscribe((result:any)=>{

  this.actifs=result

},
(error)=>{
 alert('error')
}

);


    this.sortie.getSorties().subscribe((result:any)=>{
      console.log(result)
      this.sorties=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createSortie(): void {
    const data = {
      naturePanne: this.sortieAdd.naturePanne,
      Date: this.sortieAdd.Date,
      dateSortie:this.sortieAdd.dateSortie,
      dateRestitution:this.sortieAdd.dateRestitution,
      etatGeneral:this.sortieAdd.etatGeneral,
      observation:this.sortieAdd.observation,
      agentS:this.sortieAdd.agentS,
      responsable:this.sortieAdd.responsable,
      actifS:this.sortieAdd.actifS,

    };
console.log(data)
    this.sortie.createSortie(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `sortie d'actif a été ajouté avec succès`

        );
        this.sortieAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          naturePanne: '',
    Date: '',
    dateSortie:'',
    dateRestitution:'',
    etatGeneral:'',
    observation:'',
    agentS:'',
    responsable:'',
    actifS:'',

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
        this.toaster.error('vous devez verifier vos champs ')
      });

}




Annuler(){
  this.sortieAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    naturePanne: '',
    Date: '',
    dateSortie:'',
    dateRestitution:'',
    etatGeneral:'',
    observation:'',
    agentS:'',
    responsable:'',
    actifS:'',


  };
}


deleteSortie(Pat:any) {
  this.sortie.deleteSortie(Pat).subscribe(
    (data)=>{
      this.toaster.error(`sortie d'actif a été supprimé avec succès`);

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


Recherche(){
  this.sortie.getSortie(this.id).subscribe((result:any)=>{
    console.log(result)
    this.sorties=result
  },
  (error)=>{
   alert(error)
  }

  )
}

}
