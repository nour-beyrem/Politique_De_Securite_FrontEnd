import { AuthService } from './../authentification/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from '../authentification/user.service';
import { IncidentService } from './incident.service';
import { TokenService } from '../authentification/token.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  incidents:any

  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any


  incidentAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    Date: '',
    nomIncident: '',
    source:'',
    destination:'',
    impact:'',
    dureePerturbation:'',
    intervention:'',
    dommage:'',
    demarcheRepartion:'',
    demarchePrevention:''


  };
  submitted = false;

  constructor(private incident:IncidentService,private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {



    this.incident.getIncidents().subscribe((result:any)=>{
      console.log(result)
      this.incidents=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createIncident(): void {
    const data = {


      Date: this.incidentAdd.Date,
      nomIncident: this.incidentAdd.nomIncident,
      source:this.incidentAdd.source,
      destination:this.incidentAdd.destination,
      impact:this.incidentAdd.impact,
      dureePerturbation:this.incidentAdd.dureePerturbation,
      intervention:this.incidentAdd.intervention,
      dommage:this.incidentAdd.dommage,
      demarcheRepartion:this.incidentAdd.demarcheRepartion,
      demarchePrevention:this.incidentAdd.demarchePrevention
    };

    this.incident.createIncident(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `incident a été ajouté avec succès`

        );
        this.incidentAdd={
          createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    Date: '',
    nomIncident: '',
    source:'',
    destination:'',
    impact:'',
    dureePerturbation:'',
    intervention:'',
    dommage:'',
    demarcheRepartion:'',
    demarchePrevention:''

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
      });

}




Annuler(){
  this.incidentAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    Date: '',
    nomIncident: '',
    source:'',
    destination:'',
    impact:'',
    dureePerturbation:'',
    intervention:'',
    dommage:'',
    demarcheRepartion:'',
    demarchePrevention:''


  };
}


deleteIncident(Pat:any) {
  this.incident.deleteIncident(Pat).subscribe(
    (data)=>{
      this.toaster.error(`incident a été supprimé avec succès`);

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
