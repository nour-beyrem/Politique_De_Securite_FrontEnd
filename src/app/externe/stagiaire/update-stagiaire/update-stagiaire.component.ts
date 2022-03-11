import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { DocumentService } from 'src/app/document/document.service';
import { ExterneService } from '../../externe.service';

@Component({
  selector: 'app-update-stagiaire',
  templateUrl: './update-stagiaire.component.html',
  styleUrls: ['./update-stagiaire.component.css']
})
export class UpdateStagiaireComponent implements OnInit {

  id:string="";
  externeAdd :any
  charte:any;
  type:string="confidentialite_Stagiare";
  support:any

  constructor(private sanitizer: DomSanitizer,public document:DocumentService,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private externe:ExterneService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'];

      });
      this.externe.getExterne(this.id).subscribe((result:any)=>{

        this.externeAdd=result[0];

        console.log('nou',this.externeAdd)

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


    this.externe.updateExterne(this.externeAdd.id,this.externeAdd).subscribe(
      (personel)=>{
        this.toaster.success(
          `stagiaire a été modifier avec succès`
        );
        this.router.navigate(['stagiaire']);
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
    this.router.navigate(['stagiaire']);
  }



}
