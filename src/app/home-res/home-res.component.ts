import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';

@Component({
  selector: 'app-home-res',
  templateUrl: './home-res.component.html',
  styleUrls: ['./home-res.component.css']
})
export class HomeResComponent implements OnInit {
username:any
role:any
  constructor(public router: Router,private token: TokenService,public authService:AuthService,private toaster: ToastrService) { }

  ngOnInit(): void {
    this.username=this.token.getInfos().username;
    this.role=this.token.getInfos().role;
    console.log(this.role)

  }

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }

}
