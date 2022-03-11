import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { ActifService } from '../actif.service';

@Component({
  selector: 'app-update-actif',
  templateUrl: './update-actif.component.html',
  styleUrls: ['./update-actif.component.css']
})
export class UpdateActifComponent implements OnInit {

  id:string="";
  users:any

  actifAdd :any;
  user:any;

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private actif:ActifService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.actif.getActif(this.id).subscribe((result:any)=>{

       this.actifAdd=result[0];
this.user=this.actifAdd.proprietaire.username
       console.log(result)
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


    this.actif.updateActif(this.actifAdd.id,this.actifAdd).subscribe(
      (actif)=>{
        this.toaster.success(
          `actif a été modifier avec succès`
        );
        this.router.navigate(['actif']);
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
    this.router.navigate(['actif']);
  }



}
