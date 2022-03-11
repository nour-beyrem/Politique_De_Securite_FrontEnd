import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { PerimetreService } from '../perimetre.service';

@Component({
  selector: 'app-update-perimetre',
  templateUrl: './update-perimetre.component.html',
  styleUrls: ['./update-perimetre.component.css']
})
export class UpdatePerimetreComponent implements OnInit {

  id:string="";
  users:any

  perimetreAdd :any;
  user:any;

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private perimetre:PerimetreService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.perimetre.getPerimetre(this.id).subscribe((result:any)=>{

       this.perimetreAdd=result[0];
this.user=this.perimetreAdd.proprietaire.username
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


    this.perimetre.updatePerimetre(this.perimetreAdd.id,this.perimetreAdd).subscribe(
      (perimetre)=>{
        this.toaster.success(
          `perimetre a été modifier avec succès`
        );
        this.router.navigate(['perimetre']);
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
    this.router.navigate(['perimetre']);
  }




}
