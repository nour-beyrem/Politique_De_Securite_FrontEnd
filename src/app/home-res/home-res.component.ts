import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-home-res',
  templateUrl: './home-res.component.html',
  styleUrls: ['./home-res.component.css']
})
export class HomeResComponent implements OnInit {

  constructor(public router: Router,public authService:AuthService,private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }

}
