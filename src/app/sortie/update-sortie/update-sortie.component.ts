import { ExterneService } from './../../externe/externe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActifService } from 'src/app/actif/actif.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { SortieService } from '../sortie.service';

@Component({
  selector: 'app-update-sortie',
  templateUrl: './update-sortie.component.html',
  styleUrls: ['./update-sortie.component.css']
})
export class UpdateSortieComponent implements OnInit {

  id:string="";
  users:any
  actifs:any

  sortieAdd :any;
  userA:any;
  userR:any
  actifS:any
  partenaire:any
  type:string="partenaire"

  constructor(private externe:ExterneService,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private actif:ActifService, private userService : UserAuthService, private sortie:SortieService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.sortie.getSortie(this.id).subscribe((result:any)=>{

       this.sortieAdd=result[0];
this.userA=this.sortieAdd.agentS.username
this.userR=this.sortieAdd.responsable.username
this.actifS=this.sortieAdd.actifS.id
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

      this.externe.getExterneByType(this.type).subscribe((result:any)=>{
        console.log(result)
        this.partenaire=result
      },
      (error)=>{
       alert('error')
      }

      )


      this.actif.getActifs().subscribe((result:any)=>{

        this.actifs=result

      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.sortie.updateSortie(this.sortieAdd.ref,this.sortieAdd).subscribe(
      (sortie)=>{
        this.toaster.success(
          `sortie a été modifier avec succès`
        );
        this.router.navigate(['sortie']);
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
    this.router.navigate(['sortie']);
  }

}
