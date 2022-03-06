import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CelluleService } from 'src/app/cellule/cellule.service';
import { ReunionService } from '../reunion.service';

@Component({
  selector: 'app-update-reunion',
  templateUrl: './update-reunion.component.html',
  styleUrls: ['./update-reunion.component.css']
})
export class UpdateReunionComponent implements OnInit {

  id:string="";
  reunionAdd :any;
  user:any;
  decision:any

  constructor(private sanitizer: DomSanitizer,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private reunion:ReunionService, private celluleService : CelluleService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.reunion.getReunion(this.id).subscribe((result:any)=>{

       this.reunionAdd=result;


       this.decision = this.sanitizer.bypassSecurityTrustResourceUrl(this.reunionAdd.decision);
       console.log(this.decision)
      },
      (error)=>{
       alert('error')
      }

      );
  }

  getById(code:any){
    this.reunion.getReunion(code).subscribe(data=>{
      this.reunionAdd= data;

    });
  }





  processForm(){


    this.reunion.updateReunion(this.reunionAdd.id,this.reunionAdd).subscribe(
      (cellule)=>{
        this.toaster.success(
          `reunion a été modifier avec succès`
        );
        this.router.navigate(['reunion']);
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
    this.router.navigate(['reunion']);
  }


}
