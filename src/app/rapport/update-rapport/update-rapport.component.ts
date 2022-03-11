import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RapportService } from '../rapport.service';

@Component({
  selector: 'app-update-rapport',
  templateUrl: './update-rapport.component.html',
  styleUrls: ['./update-rapport.component.css']
})
export class UpdateRapportComponent implements OnInit {

  id:string="";
  rapportAdd :any;
  user:any;
  filePath:any

  constructor(private sanitizer: DomSanitizer,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private rapport:RapportService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.rapport.getRapport(this.id).subscribe((result:any)=>{

       this.rapportAdd=result[0];


       this.filePath = this.sanitizer.bypassSecurityTrustResourceUrl(this.rapportAdd.filePath);
       console.log(this.filePath)
      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.rapport.updateRapport(this.rapportAdd.id,this.rapportAdd).subscribe(
      (rapport)=>{
        this.toaster.success(
          `reunion a été modifier avec succès`
        );
        this.router.navigate(['rapport']);
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
    this.router.navigate(['rapport']);
  }



}
