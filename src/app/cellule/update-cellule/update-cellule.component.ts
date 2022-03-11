import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { CelluleService } from '../cellule.service';

@Component({
  selector: 'app-update-cellule',
  templateUrl: './update-cellule.component.html',
  styleUrls: ['./update-cellule.component.css']
})
export class UpdateCelluleComponent implements OnInit {


  id:string="";
  celluleAdd :any;
  user:any;

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private cellule:CelluleService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.cellule.getCellule(this.id).subscribe((result:any)=>{

       this.celluleAdd=result[0];
       console.log(result)
      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.cellule.updateCellule(this.celluleAdd.id,this.celluleAdd).subscribe(
      (cellule)=>{
        this.toaster.success(
          `cellule a été modifier avec succès`
        );
        this.router.navigate(['cellule']);
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
