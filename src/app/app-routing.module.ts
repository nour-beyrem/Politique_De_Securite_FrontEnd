import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActifComponent } from './actif/actif.component';
import { UpdateActifComponent } from './actif/update-actif/update-actif.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { CelluleComponent } from './cellule/cellule.component';
import { UpdateCelluleComponent } from './cellule/update-cellule/update-cellule.component';
import { DocumentComponent } from './document/document.component';
import { UpdateDocumentComponent } from './document/update-document/update-document.component';
import { HomeResComponent } from './home-res/home-res.component';
import { IncidentComponent } from './incident/incident.component';
import { UpdateIncidentComponent } from './incident/update-incident/update-incident.component';
import { ProgrammeComponent } from './programme/programme.component';
import { UpdateProgrammeComponent } from './programme/update-programme/update-programme.component';
import { RapportComponent } from './rapport/rapport.component';
import { UpdateRapportComponent } from './rapport/update-rapport/update-rapport.component';
import { ReunionCComponent } from './reunionC/reunion-c/reunion-c.component';
import { UpdateReunionComponent } from './reunionC/update-reunion/update-reunion.component';
import { SignatureComponent } from './user/signature/signature.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserActifComponent } from './user/user-actif/user-actif.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path: '', component: AuthComponent},
{path: 'cellule', component: CelluleComponent},
{path: 'homeRes', component: HomeResComponent},
{path: 'updateCellule/:id', component: UpdateCelluleComponent},
{path: 'reunion', component:ReunionCComponent},
{path: 'document', component:DocumentComponent},
{path: 'user', component:UserComponent},
{path: 'incident', component:IncidentComponent},
{path: 'rapport', component:RapportComponent},
{path: 'actif', component:ActifComponent},
{path: 'signature', component:SignatureComponent},
{path: 'programme', component:ProgrammeComponent},
{path: 'updateReunion/:id', component:UpdateReunionComponent},
{path: 'updateActif/:id', component:UpdateActifComponent},
{path: 'updateDocument/:id', component:UpdateDocumentComponent},
{path: 'updateUser/:id', component:UpdateUserComponent},
{path: 'updateProgramme/:id', component:UpdateProgrammeComponent},
{path: 'ActifUser/:id', component:UserActifComponent},
{path: 'updateIncident/:id', component:UpdateIncidentComponent},
{path: 'updateRapport/:id', component:UpdateRapportComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
