import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/authentification/token.service';
import { UserAuthService } from 'src/app/authentification/user.service';
import { UserSService } from '../user-s.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {

  username:string="";
  personelAdd :any

  constructor(public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private personel:UserSService, private userService : UserAuthService,private token: TokenService) { }

  ngOnInit(): void {


    this.username=this.token.getInfos().username
      this.personel.getUser(this.username).subscribe((result:any)=>{

        this.personelAdd=result;

        console.log('nou',this.personelAdd)

       },
       (error)=>{
        alert('error')
       }

       );
  }







  processForm(){


    this.personel.updateUser(this.personelAdd.username,this.personelAdd).subscribe(
      (personel)=>{
        this.toaster.success(
          `personel a été modifier avec succès`
        );
        this.router.navigate(['homeAgent']);
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
    this.router.navigate(['homeAgent']);
  }

}
