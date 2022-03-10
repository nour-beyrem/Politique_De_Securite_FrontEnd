import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActifComponent } from './actif/actif.component';
import { UpdateActifComponent } from './actif/update-actif/update-actif.component';
import { AuthComponent } from './authentification/auth/auth.component';
import { CelluleComponent } from './cellule/cellule.component';
import { UpdateCelluleComponent } from './cellule/update-cellule/update-cellule.component';
import { DocumentComponent } from './document/document.component';
import { UpdateDocumentComponent } from './document/update-document/update-document.component';
import { PartenaireComponent } from './externe/partenaire/partenaire.component';
import { UpdatePartenaireComponent } from './externe/partenaire/update-partenaire/update-partenaire.component';
import { StagiaireComponent } from './externe/stagiaire/stagiaire.component';
import { UpdateStagiaireComponent } from './externe/stagiaire/update-stagiaire/update-stagiaire.component';
import { HomeResComponent } from './home-res/home-res.component';
import { IncidentComponent } from './incident/incident.component';
import { UpdateIncidentComponent } from './incident/update-incident/update-incident.component';
import { InformationComponent } from './information/information.component';
import { UpdateInformationComponent } from './information/update-information/update-information.component';
import { PerimetreComponent } from './perimetre/perimetre.component';
import { UpdatePerimetreComponent } from './perimetre/update-perimetre/update-perimetre.component';
import { ProgrammeComponent } from './programme/programme.component';
import { UpdateProgrammeComponent } from './programme/update-programme/update-programme.component';
import { RapportComponent } from './rapport/rapport.component';
import { UpdateRapportComponent } from './rapport/update-rapport/update-rapport.component';
import { ReunionCComponent } from './reunionC/reunion-c/reunion-c.component';
import { UpdateReunionComponent } from './reunionC/update-reunion/update-reunion.component';
import { SortieComponent } from './sortie/sortie.component';
import { UpdateSortieComponent } from './sortie/update-sortie/update-sortie.component';
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
{path: 'partenaire', component:PartenaireComponent},
{path: 'stagiaire', component:StagiaireComponent},
{path: 'actif', component:ActifComponent},
{path: 'sortie', component:SortieComponent},
{path: 'signature', component:SignatureComponent},
{path: 'information', component:InformationComponent},
{path: 'perimetre', component:PerimetreComponent},
{path: 'programme', component:ProgrammeComponent},
{path: 'updateReunion/:id', component:UpdateReunionComponent},
{path: 'updateSortie/:id', component:UpdateSortieComponent},
{path: 'updateActif/:id', component:UpdateActifComponent},
{path: 'updatePerimetre/:id', component:UpdatePerimetreComponent},
{path: 'updateStagiaire/:id', component:UpdateStagiaireComponent},
{path: 'updatePartenaire/:id', component:UpdatePartenaireComponent},
{path: 'updateDocument/:id', component:UpdateDocumentComponent},
{path: 'updateInformation/:id', component:UpdateInformationComponent},
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
