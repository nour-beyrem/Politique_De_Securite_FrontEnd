import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentification/auth.service';
import { TokenService } from 'src/app/authentification/token.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { DocumentService } from 'src/app/document/document.service';
import { ExterneService } from '../externe.service';

@Component({
  selector: 'app-signature-s',
  templateUrl: './signature-s.component.html',
  styleUrls: ['./signature-s.component.css']
})
export class SignatureSComponent implements OnInit {

  externes:any
  actifs:any
  id:string="";
  auth:any;
  role :string="stagiare"
  user:any
  username:any
  charte:any;
  type:string="confidentialite_Stagiare";
  support:any

  externeAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    prenom: '',
    nom: '',

    //ref:'',
    type:'',
   // intervenant:'',
    email:'',
   // raisonSocial:'',
   // responsable:'',
   // domaine:'',
    tel:'',
    faculte:'',
    type_Stage:'',
    DateDebut:'',
    DateFin:'',
    //deQuoi:'',
    charte:false

  };
  submitted = false;

  constructor(private sanitizer: DomSanitizer,public document:DocumentService,private externe:ExterneService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {


    this.document.getDocumentByType(this.type).subscribe((result:any)=>{

      this.support=result
      console.log('resul',this.support)
      this.charte=this.sanitizer.bypassSecurityTrustResourceUrl(this.support.document);;

      console.log('charte',this.charte)

     },
     (error)=>{
      alert('error')
     }

     );


 this.user= this.userService.getbyid(this.user,this.id);




  }


  createExterne(): void {
    const data = {
      prenom: this.externeAdd.prenom,
    nom: this.externeAdd.nom,

    //ref:this.externeAdd.ref,
    type:this.role,
   // intervenant:this.externeAdd.intervenant,
    email:this.externeAdd.email,
    //raisonSocial:this.externeAdd.raisonSocial,
   // responsable:this.externeAdd.responsable,
   // domaine:this.externeAdd.domaine,
    tel:this.externeAdd.tel,
    faculte:this.externeAdd.faculte,
    type_Stage:this.externeAdd.type_Stage,
    DateDebut:this.externeAdd.DateDebut,
    DateFin:this.externeAdd.DateFin,
   // deQuoi:this.externeAdd.deQuoi
   charte:this.externeAdd.charte
    };


    this.externe.createExterne(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `stagiaire a été ajouté avec succès`


        );

        this.externeAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          prenom: '',

          nom: '',

         // ref:'',
          type:'',
         // intervenant:'',
          email:'',
         // raisonSocial:'',
         // responsable:'',
         // domaine:'',
          tel:'',
          faculte:'',
          type_Stage:'',
          DateDebut:'',
          DateFin:'',
        //  deQuoi:'',
          charte:false
        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
        this.toaster.error('vous devez verifier vos champs ')
      });

}




Annuler(){
  this.externeAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    prenom: '',
    nom: '',

   // ref:'',
    type:'',
   // intervenant:'',
    email:'',
   // raisonSocial:'',
   // responsable:'',
   // domaine:'',
    tel:'',
    faculte:'',
    type_Stage:'',
    DateDebut:'',
    DateFin:'',
    //deQuoi:'',
    charte:false

  };
}

home():void{
  this.router.navigate([''])
}







}
