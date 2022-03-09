import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { InformationService } from './information.service';
import { PredictionService } from './prediction.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  informations:any
  informationAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    reference:'',
    criticiteCID:0,
    criticiteBUSINESS:0,
    marquage:''

  };
  submitted = false;
  constructor(
    private pred: PredictionService,private information:InformationService,private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService
  ) {}

  ngOnInit(): void {

    this.information.getInformations().subscribe((result:any)=>{
      console.log(result)
      this.informations=result
    },
    (error)=>{
     alert('error')
    }

    )
  }


  Prediction(): void {
    const data = {

      criticiteCID: this.informationAdd.criticiteCID,
      criticiteBUSINESS: this.informationAdd.criticiteBUSINESS

    };

    this.pred.predir(data)
    .subscribe(
      (response) => {
        console.log(response);
this.informationAdd.marquage= response



      },
      (error) => {

          console.log(error)
      });

}


createInformation(): void {
  const data = {


    reference:this.informationAdd.reference,
    criticiteCID:this.informationAdd.criticiteCID,
    criticiteBUSINESS:this.informationAdd.criticiteBUSINESS,
    marquage:this.informationAdd.marquage
  };

  this.information.createInformation(data)
  .subscribe(
    (response) => {
      this.toaster.success(
        `incident a été ajouté avec succès`

      );
      this.informationAdd={
        createdAt:'',
        updatedAt:'',
        deletedAt:'',
        reference:'',
        criticiteCID:0,
        criticiteBUSINESS:0,
        marquage:''

      };

      this.submitted = true;

    },
    (error) => {
      console.log(error);
    });

}




Annuler(){
this.informationAdd={
  createdAt:'',
  updatedAt:'',
  deletedAt:'',
  reference:'',
  criticiteCID:0,
  criticiteBUSINESS:0,
  marquage:''


};
}


deleteInformation(Pat:any) {
this.information.deleteInformation(Pat).subscribe(
  (data)=>{
    this.toaster.error(`information a été supprimé avec succès`);

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
