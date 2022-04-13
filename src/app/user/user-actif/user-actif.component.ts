import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActifService } from 'src/app/actif/actif.service';
import { AuthService } from 'src/app/authentification/auth.service';
import { TokenService } from 'src/app/authentification/token.service';
import { UserAuthService } from 'src/app/authentification/user.service';

@Component({
  selector: 'app-user-actif',
  templateUrl: './user-actif.component.html',
  styleUrls: ['./user-actif.component.css']
})
export class UserActifComponent implements OnInit {
  actifs:any
  id:string="";
  constructor(private actif:ActifService,private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'];

      });


      this.actif.getActifByUser(this.id).subscribe((result:any)=>{
        console.log(result)
        this.actifs=result
      },
      (error)=>{
       alert('error')
      }

      )


  }

  Retour(){
    this.router.navigate(['user'])
  }

  deleteActif(Pat:any) {
    this.actif.deleteActif(Pat).subscribe(
      (data)=>{
        this.toaster.error(`actif a été supprimé avec succès`);

    });


  }

}
