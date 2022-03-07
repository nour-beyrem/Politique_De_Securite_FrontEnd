import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { IncidentService } from '../incident.service';

@Component({
  selector: 'app-update-incident',
  templateUrl: './update-incident.component.html',
  styleUrls: ['./update-incident.component.css']
})
export class UpdateIncidentComponent implements OnInit {


  id:string="";
  incidentAdd :any;
  user:any;

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private incident:IncidentService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.incident.getIncident(this.id).subscribe((result:any)=>{

       this.incidentAdd=result;
       console.log(result)
      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.incident.updateIncident(this.incidentAdd.id,this.incidentAdd).subscribe(
      (incident)=>{
        this.toaster.success(
          `incident a été modifier avec succès`
        );
        this.router.navigate(['incident']);
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
    this.router.navigate(['cellule']);
  }

}
