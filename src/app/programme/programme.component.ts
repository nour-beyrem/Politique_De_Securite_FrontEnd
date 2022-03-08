import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { ProgrammeService } from './programme.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  programmes:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any
  username:any
  nom:any
  prenom:any



  programmeAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    theme:'',
    sujetPlotique: '',
    duree: '',
    lieu:'',
    Date:'',
    pv:'',
    etat:'',
    presence:'',
    publicConcerne:'',



  };
  submitted = false;

  constructor(private sanitizer: DomSanitizer,private programme:ProgrammeService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {

    this.username=this.token.getInfos().username;







    this.programme.getProgrammes().subscribe((result:any)=>{
      console.log(result)
      this.programmes=result

    },
    (error)=>{
     alert('error')
    }

    )


  }


  createProgramme(): void {
    const data = {


      theme:this.programmeAdd.theme,
      sujetPlotique: this.programmeAdd.sujetPlotique,
      duree: this.programmeAdd.duree,
      lieu:this.programmeAdd.lieu,
      Date:this.programmeAdd.Date,
      pv:this.programmeAdd.pv,
      etat:this.programmeAdd.etat,
      presence:this.programmeAdd.presence,
      publicConcerne:this.programmeAdd.publicConcerne,

    };

    this.programme.createProgramme(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `programme a été ajouté avec succès`

        );
        this.programmeAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          theme:'',
    sujetPlotique: '',
    duree: '',
    lieu:'',
    Date:'',
    pv:'',
    etat:'',
    presence:'',
    publicConcerne:'',

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
      });

}




Annuler(){
  this.programmeAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    theme:'',
    sujetPlotique: '',
    duree: '',
    lieu:'',
    Date:'',
    pv:'',
    etat:'',
    presence:'',
    publicConcerne:'',


  };
}


deleteProgramme(Pat:any) {
  this.programme.deleteProgramme(Pat).subscribe(
    (data)=>{
      this.toaster.error(`programme a été supprimé avec succès`);

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
