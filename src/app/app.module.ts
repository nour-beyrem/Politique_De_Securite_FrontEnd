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
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    PdfViewerModule

  ],
  providers: [ {provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
