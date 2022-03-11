import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { MatriceService } from '../matrice.service';

@Component({
  selector: 'app-update-matrice',
  templateUrl: './update-matrice.component.html',
  styleUrls: ['./update-matrice.component.css']
})
export class UpdateMatriceComponent implements OnInit {

  id:string="";
  matriceAdd :any;
  user:any;

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private matrice:MatriceService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.matrice.getMatrice(this.id).subscribe((result:any)=>{

       this.matriceAdd=result[0];
       console.log(result)
      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.matrice.updateMatrice(this.matriceAdd.id,this.matriceAdd).subscribe(
      (matrice)=>{
        this.toaster.success(
          `matrice a été modifier avec succès`
        );
        this.router.navigate(['matrice']);
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
    this.router.navigate(['matrice']);
  }


}
