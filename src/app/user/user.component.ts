import { ActifService } from './../actif/actif.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { UserSService } from './user-s.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  personels:any
  actifs:any
  id:string="";
  auth:any;
  role :string="rece"
  user:any
  username:any

  personelAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    adresse:'',
    email:'',
    direction:'',
    site:'',
    sortie:false,
    dateSortie:'',
    charte:false,
    teletravail:false,
    password:'',
    salt:'',
    username:'',
    matricule:''

  };
  submitted = false;

  constructor(private personel:UserSService, private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params) => {
        this.id=params['id'];

      });

    this.auth=this.userService.getbyid(this.auth,this.id);
    this.username=this.token.getInfos().username
    this.role=this.auth.role;
    console.log('id',this.token.getInfos().username)

 this.user= this.userService.getbyid(this.user,this.id);

    this.personel.getUsers().subscribe((result:any)=>{
      console.log(result)
      this.personels=result
    },
    (error)=>{
     alert('error')
    }

    )


  }


  createPersonel(): void {
    const data = {
      username: this.personelAdd.username,
      matricule: this.personelAdd.username,
      nom: this.personelAdd.nom,
      prenom: this.personelAdd.prenom,
      sexe: this.personelAdd.sexe,
      cin: this.personelAdd.cin,
      role: this.personelAdd.role,
      adresse: this.personelAdd.adresse,
      email: this.personelAdd.email,
      direction: this.personelAdd.direction,
      teletravail: this.personelAdd.teletravail,
      site: this.personelAdd.site,
      sortie: this.personelAdd.sortie,
      dateSortie: this.personelAdd.dateSortie,
      charte: this.personelAdd.charte,
      password: this.personelAdd.password,
      salt: this.personelAdd.salt

    };
    console.log(this.personelAdd)

    this.personel.createUser(data)
    .subscribe(
      (response) => {
        this.toaster.success(
          `personel a été ajouté avec succès`


        );

        this.personelAdd={
          createdAt:'',
          updatedAt:'',
          deletedAt:'',
          prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    adresse:'',
    email:'',
    direction:'',
    site:'',
    sortie:false,
    dateSortie:'',
    charte:false,
    teletravail:false,
    password:'',
    salt:'',
    username:'',
    matricule:''

        };

        this.submitted = true;

      },
      (error) => {
        console.log(error);
        this.toaster.error('cette identifiant est déjà existant  ')
      });

}




Annuler(){
  this.personelAdd={
    createdAt:'',
    updatedAt:'',
    deletedAt:'',
    prenom: '',
    nom: '',
    sexe:'',
    cin:'',
    role:'',
    adresse:'',
    email:'',
    direction:'',
    site:'',
    sortie:false,
    dateSortie:'',
    charte:false,
    teletravail:false,
    password:'',
    salt:'',
    username:'',
    matricule:''

  };
}

home():void{
  this.router.navigate(['homeRes'])
}
deletePersonel(Pat:any) {
  this.personel.deleteUser(Pat).subscribe(
    (data)=>{
      this.toaster.error(`personel a été supprimé avec succès`);

  });


}

  logout(): void {
    this.authService.logout();
    this.toaster.info('a la prochaine');
    this.router.navigate(['']);
  }

  Recherche(){
    this.personel.getUser(this.id).subscribe((result:any)=>{
      console.log(result)
      this.personels=result
    },
    (error)=>{
     alert(error)
    }

    )
  }

}
