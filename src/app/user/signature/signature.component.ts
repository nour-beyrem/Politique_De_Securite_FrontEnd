import { DocumentService } from './../../document/document.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/authentification/token.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { UserSService } from '../user-s.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  username:string="";
  personelAdd :any;
  charte:any;
  type:string="charte";
  support:any

  constructor(private sanitizer: DomSanitizer,public document:DocumentService,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private personel:UserSService, private userService : UserAuthService,private token: TokenService) { }

  ngOnInit(): void {


    this.username=this.token.getInfos().username
      this.personel.getUser(this.username).subscribe((result:any)=>{

        this.personelAdd=result[0];

        console.log('nou',this.personelAdd)

       },
       (error)=>{
        alert('error')
       }

       );

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
  }







  processForm(){


    this.personel.updateUser(this.personelAdd.username,this.personelAdd).subscribe(
      (personel)=>{
        this.toaster.success(
          `votre signature a ete enregistrer`
        );
        this.router.navigate(['homeAgent']);
      },
      (erreur) => {
        console.log(erreur);
        this.toaster.error(
          `Problème avec le serveur veuillez contacter l'admin`
        );
      }

    );

  }
  Annuler(){
    this.router.navigate(['homeAgent']);
  }

}
