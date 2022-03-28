import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './authentification/jwt.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthComponent } from './authentification/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { CelluleComponent } from './cellule/cellule.component';
import { HomeResComponent } from './home-res/home-res.component';
import { UpdateCelluleComponent } from './cellule/update-cellule/update-cellule.component';

import { UpdateReunionComponent } from './reunionC/update-reunion/update-reunion.component';
import { ReunionCComponent } from './reunionC/reunion-c/reunion-c.component';
import { SafePipe } from './safe.pipe';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { SignatureComponent } from './user/signature/signature.component';
import { DocumentComponent } from './document/document.component';
import { UpdateDocumentComponent } from './document/update-document/update-document.component';
import { IncidentComponent } from './incident/incident.component';
import { UpdateIncidentComponent } from './incident/update-incident/update-incident.component';
import { ActifComponent } from './actif/actif.component';
import { UpdateActifComponent } from './actif/update-actif/update-actif.component';
import { RapportComponent } from './rapport/rapport.component';
import { UpdateRapportComponent } from './rapport/update-rapport/update-rapport.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserActifComponent } from './user/user-actif/user-actif.component';
import { ProgrammeComponent } from './programme/programme.component';
import { UpdateProgrammeComponent } from './programme/update-programme/update-programme.component';
import { InformationComponent } from './information/information.component';
import { UpdateInformationComponent } from './information/update-information/update-information.component';
import { PerimetreComponent } from './perimetre/perimetre.component';
import { UpdatePerimetreComponent } from './perimetre/update-perimetre/update-perimetre.component';
import { SortieComponent } from './sortie/sortie.component';
import { UpdateSortieComponent } from './sortie/update-sortie/update-sortie.component';
import { ExterneComponent } from './externe/externe.component';
import { UpdateExterneComponent } from './externe/update-externe/update-externe.component';
import { PartenaireComponent } from './externe/partenaire/partenaire.component';
import { StagiaireComponent } from './externe/stagiaire/stagiaire.component';
import { UpdatePartenaireComponent } from './externe/partenaire/update-partenaire/update-partenaire.component';
import { UpdateStagiaireComponent } from './externe/stagiaire/update-stagiaire/update-stagiaire.component';
import { AutorisationComponent } from './autorisation/autorisation.component';
import { UpdateAutorisationComponent } from './autorisation/update-autorisation/update-autorisation.component';
import { ConfirmationlistComponent } from './autorisation/confirmationlist/confirmationlist.component';
import { ConfirmationComponent } from './autorisation/confirmation/confirmation.component';
import { MatriceComponent } from './matrice/matrice.component';
import { UpdateMatriceComponent } from './matrice/update-matrice/update-matrice.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { SignaturePComponent } from './externe/signature-p/signature-p.component';
import { SignatureSComponent } from './externe/signature-s/signature-s.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    CelluleComponent,
    HomeResComponent,
    UpdateCelluleComponent,
    ReunionCComponent,
    UpdateReunionComponent,
    SafePipe,
    UpdateUserComponent,
    SignatureComponent,
    DocumentComponent,
    UpdateDocumentComponent,
    IncidentComponent,
    UpdateIncidentComponent,
    ActifComponent,
    UpdateActifComponent,
    RapportComponent,
    UpdateRapportComponent,
    UserActifComponent,
    ProgrammeComponent,
    UpdateProgrammeComponent,
    InformationComponent,
    UpdateInformationComponent,
    PerimetreComponent,
    UpdatePerimetreComponent,
    SortieComponent,
    UpdateSortieComponent,
    ExterneComponent,
    UpdateExterneComponent,
    PartenaireComponent,
    StagiaireComponent,
    UpdatePartenaireComponent,
    UpdateStagiaireComponent,
    AutorisationComponent,
    UpdateAutorisationComponent,
    ConfirmationlistComponent,
    ConfirmationComponent,
    MatriceComponent,
    UpdateMatriceComponent,
    SignaturePComponent,
    SignatureSComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    PdfViewerModule,
    MatSelectModule,
    MatFormFieldModule,
    MaterialFileInputModule,
    MatFileUploadModule



  ],
  providers: [ {provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
