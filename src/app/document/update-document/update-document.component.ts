import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {

  id:string="";
  documentAdd :any;
  user:any;
  support:any

  constructor(private sanitizer: DomSanitizer,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private document:DocumentService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.document.getDocument(this.id).subscribe((result:any)=>{

       this.documentAdd=result;


       this.support = this.sanitizer.bypassSecurityTrustResourceUrl(this.documentAdd.document);
       console.log(this.support)
      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.document.updateDocument(this.documentAdd.id,this.documentAdd).subscribe(
      (document)=>{
        this.toaster.success(
          `document a été modifier avec succès`
        );
        this.router.navigate(['document']);
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
    this.router.navigate(['document']);
  }



}
