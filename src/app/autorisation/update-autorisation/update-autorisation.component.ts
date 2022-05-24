import { AutorisationService } from './../autorisation.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActifService } from 'src/app/actif/actif.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { TokenService } from 'src/app/authentification/token.service';

@Component({
  selector: 'app-update-autorisation',
  templateUrl: './update-autorisation.component.html',
  styleUrls: ['./update-autorisation.component.css']
})
export class UpdateAutorisationComponent implements OnInit {

  id:string="";
  users:any
  actifs:any

  autorisationAdd :any;
  userA:any;
  userR:any
  actifS:any
  partenaire:any


  constructor(private token: TokenService,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private actif:ActifService, private userService : UserAuthService, private autorisation:AutorisationService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.autorisation.getAutoriation(this.id).subscribe((result:any)=>{

       this.autorisationAdd=result[0];
       console.log(this.autorisationAdd)
this.userA=this.autorisationAdd.user.username
console.log(this.userA)
this.userR=this.token.getInfos().username;

this.actifS=this.autorisationAdd.actif.id
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




  }







  processForm(){


    this.autorisation.updateAutoriation(this.autorisationAdd.id,this.autorisationAdd).subscribe(
      (sortie)=>{
        this.toaster.success(
          `autorisation a été modifier avec succès`
        );
        this.router.navigate(['autorisation']);
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
    this.router.navigate(['autorisation']);
  }


}
