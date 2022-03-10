import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { DocumentService } from 'src/app/document/document.service';
import { ExterneService } from '../../externe.service';

@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {

  id:string="";
  externeAdd :any
  charte:any;
  type:string="contrat_Partenaire";
  support:any

  constructor(private sanitizer: DomSanitizer,public document:DocumentService,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private externe:ExterneService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'];

      });
      this.externe.getExterne(this.id).subscribe((result:any)=>{

        this.externeAdd=result;

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
          `partenaire a été modifier avec succès`
        );
        this.router.navigate(['partenaire']);
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
    this.router.navigate(['partenaire']);
  }



}
