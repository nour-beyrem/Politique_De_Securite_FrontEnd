import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-update-information',
  templateUrl: './update-information.component.html',
  styleUrls: ['./update-information.component.css']
})
export class UpdateInformationComponent implements OnInit {

  id:string="";
  informationAdd :any;
  user:any;

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private information:InformationService, private userService : UserAuthService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.information.getInformation(this.id).subscribe((result:any)=>{

       this.informationAdd=result;
       console.log(result)
      },
      (error)=>{
       alert('error')
      }

      );
  }







  processForm(){


    this.information.updateInformation(this.informationAdd.id,this.informationAdd).subscribe(
      (information)=>{
        this.toaster.success(
          `information a été modifier avec succès`
        );
        this.router.navigate(['information']);
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
    this.router.navigate(['information']);
  }


}
