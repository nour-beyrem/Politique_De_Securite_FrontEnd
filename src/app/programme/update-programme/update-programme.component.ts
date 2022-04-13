import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from 'src/app/authentification/user.service';
import { ProgrammeService } from '../programme.service';

@Component({
  selector: 'app-update-programme',
  templateUrl: './update-programme.component.html',
  styleUrls: ['./update-programme.component.css']
})
export class UpdateProgrammeComponent implements OnInit {

  id:string="";
  programmeAdd :any;
  user:any;
  support:any
  users:any
  filePath:any

  constructor(private userService : UserAuthService,private sanitizer: DomSanitizer,public router: Router,  private toaster: ToastrService,private activatedRoute:ActivatedRoute,private programme:ProgrammeService) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'] ;

      });

      this.programme.getProgramme(this.id).subscribe((result:any)=>{

       this.programmeAdd=result[0];


       this.support = this.sanitizer.bypassSecurityTrustResourceUrl(this.programmeAdd.presence);
       console.log(this.support)
      },
      (error)=>{
       alert('error')
      }

      );

      this.userService.getUsers().subscribe((result:any)=>{
        console.log(result)
        this.users=result

      },
      (error)=>{
       alert('error')
      }

      )
  }







  processForm(){


    this.programme.updateProgramme(this.programmeAdd.id,this.programmeAdd).subscribe(
      (programme)=>{
        this.toaster.success(
          `programme a été modifier avec succès`
        );
        this.router.navigate(['programme']);
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
    this.router.navigate(['programme']);
  }

}
