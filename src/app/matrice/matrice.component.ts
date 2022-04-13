import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentification/auth.service';
import { TokenService } from '../authentification/token.service';
import { UserAuthService } from '../authentification/user.service';
import { MatriceService } from './matrice.service';

@Component({
  selector: 'app-matrice',
  templateUrl: './matrice.component.html',
  styleUrls: ['./matrice.component.css']
})
export class MatriceComponent implements OnInit {

  matrices:any
  ref:any
  matriceAdd = {
    createdAt:'',
    updatedAt:'',
    deletedAt:'',

    ref: '',


    nom: '',


    VLANCompus: '',

    CloudServeur: '',

    ServeursSiege: '',

    FireWall: '',

    Proxy: '',

    Internet: '',

    PlateformeCP: '',

    TTN: '',

    Branches: '',

    CNI: '',

    RelaiS_MTP_DMZ: '',

    ServeurAntivirus:'',

  };
  submitted = false;
  constructor(
   private matrice:MatriceService,private userService : UserAuthService,public router: Router,private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,public authService:AuthService,private token: TokenService
  ) {}

  ngOnInit(): void {


  }


Rechercher(){
  this.matrice.getMatriceByReference(this.ref).subscribe((result:any)=>{
    console.log('id',this.ref)
    this.matrices=result
  },
  (error)=>{
   alert('error')
  }

  )
}


createMatrice(): void {
  const data = {


    ref: this.matriceAdd.ref,


    nom: this.matriceAdd.nom,


    VLANCompus: this.matriceAdd.VLANCompus,

    CloudServeur: this.matriceAdd.CloudServeur,

    ServeursSiege: this.matriceAdd.ServeursSiege,

    FireWall: this.matriceAdd.FireWall,

    Proxy: this.matriceAdd.Proxy,

    Internet: this.matriceAdd.Internet,

    PlateformeCP: this.matriceAdd.PlateformeCP,

    TTN: this.matriceAdd.TTN,

    Branches: this.matriceAdd.Branches,

    CNI: this.matriceAdd.CNI,

    RelaiS_MTP_DMZ: this.matriceAdd.RelaiS_MTP_DMZ,

    ServeurAntivirus:this.matriceAdd.ServeurAntivirus,
  };

  this.matrice.createMatrice(data)
  .subscribe(
    (response) => {
      this.toaster.success(
        `ligne de matrice a été ajouté avec succès`

      );
      this.matriceAdd={
        createdAt:'',
        updatedAt:'',
        deletedAt:'',
        ref: '',


    nom: '',


    VLANCompus: '',

    CloudServeur: '',

    ServeursSiege: '',

    FireWall: '',

    Proxy: '',

    Internet: '',

    PlateformeCP: '',

    TTN: '',

    Branches: '',

    CNI: '',

    RelaiS_MTP_DMZ: '',

    ServeurAntivirus:'',

      };

      this.submitted = true;

    },
    (error) => {
      console.log(error);
      this.toaster.error('vous devez verifier vos champs ')
    });

}




Annuler(){
this.matriceAdd={
  createdAt:'',
  updatedAt:'',
  deletedAt:'',
  ref: '',


  nom: '',


  VLANCompus: '',

  CloudServeur: '',

  ServeursSiege: '',

  FireWall: '',

  Proxy: '',

  Internet: '',

  PlateformeCP: '',

  TTN: '',

  Branches: '',

  CNI: '',

  RelaiS_MTP_DMZ: '',

  ServeurAntivirus:'',

};
}


deleteMatrice(Pat:any) {
this.matrice.deleteMatrice(Pat).subscribe(
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
