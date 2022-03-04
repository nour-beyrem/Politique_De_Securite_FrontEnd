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
import { ReunionCComponent } from './reunion-c/reunion-c.component';
import { UpdateReunionComponent } from './reunionC/update-reunion/update-reunion.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserComponent,
    CelluleComponent,
    HomeResComponent,
    UpdateCelluleComponent,
    ReunionCComponent,
    UpdateReunionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ {provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
