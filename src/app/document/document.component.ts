import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any
  username:any
  nom:any
  prenom:any



  documentAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    typeChapitre:'',
    document: '',
    commentaire: '',
    qui:'',


  };
  submitted = false;

  constructor(private sanitizer: DomSanitizer,private document:DocumentService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
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


    this.document.getDocuments().subscribe((result:any)=>{
      console.log(result)
      this.documents=result

    },
    (error)=>{
     alert('error')
    }

    )


  }


  createDocument(): void {
    const data = {
      typeChapitre: this.documentAdd.typeChapitre,
      document: this.documentAdd.document,
      commentaire: this.documentAdd.commentaire,
      qui: this.documentAdd.qui


    };

    this.document.createDocument(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `document a été ajouté avec succès`

        );
        this.documentAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          typeChapitre:'',
    document: '',
    commentaire: '',
    qui:'',

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
      });

}




Annuler(){
  this.documentAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    typeChapitre:'',
    document: '',
    commentaire: '',
    qui:'',


  };
}


deleteDocument(Pat:any) {
  this.document.deleteDocument(Pat).subscribe(
    (data)=>{
      this.toaster.error(`document a été supprimé avec succès`);

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
