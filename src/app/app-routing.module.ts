import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authentification/auth/auth.component';
import { CelluleComponent } from './cellule/cellule.component';
import { UpdateCelluleComponent } from './cellule/update-cellule/update-cellule.component';
import { HomeResComponent } from './home-res/home-res.component';
import { ReunionCComponent } from './reunionC/reunion-c/reunion-c.component';
import { UpdateReunionComponent } from './reunionC/update-reunion/update-reunion.component';

const routes: Routes = [{path: '', component: AuthComponent},
{path: 'cellule', component: CelluleComponent},
{path: 'homeRes', component: HomeResComponent},
{path: 'updateCellule/:id', component: UpdateCelluleComponent},
{path: 'reunion', component:ReunionCComponent},
{path: 'updateReunion/:id', component:UpdateReunionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
