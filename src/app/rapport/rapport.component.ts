import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { RapportService } from './rapport.service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  rapports:any
filePath:any
fileInformation:any
  users:any
  id:string="";
  auth:any;
  role :string="responsable"
  user:any


  rapportAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    titre: '',
    type: '',
    sujet:'',
    contenu:'',
    Date:'',
    filePath:'',


  };
  submitted = false;

  constructor(private rapport:RapportService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {



    this.rapport.getRapports().subscribe((result:any)=>{
      console.log(result)
      this.rapports=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createRapport(): void {
    const data = {

      titre: this.rapportAdd.titre,
      type: this.rapportAdd.type,
      sujet:this.rapportAdd.sujet,
      contenu:this.rapportAdd.contenu,
      Date:this.rapportAdd.Date,
      filePath:this.rapportAdd.filePath,

    };

    this.rapport.createRapport(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `rapport a été ajouté avec succès`

        );
        console.log('file',this.rapportAdd.filePath)
        this.rapportAdd={
          createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    titre: '',
    type: '',
    sujet:'',
    contenu:'',
    Date:'',
    filePath:'',
        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
      });

}




Annuler(){
  this.rapportAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    id:'',
    titre: '',
    type: '',
    sujet:'',
    contenu:'',
    Date:'',
    filePath:'',


  };
}


deleteRapport(Pat:any) {
  this.rapport.deleteRapport(Pat).subscribe(
    (data)=>{
      this.toaster.error(`reunion a été supprimé avec succès`);

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

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.filePath = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }





}
