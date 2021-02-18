import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConvidadoDetailsComponent } from './convidado-details/convidado-details.component';
import { ConvidadoListComponent } from './convidado-list/convidado-list.component';
import { CreateConvidadoComponent } from './create-convidado/create-convidado.component';
import { UpdateConvidadoComponent } from './update-convidado/update-convidado.component';

const routes: Routes = [
  {path: 'convidados', component: ConvidadoListComponent},
  {path: 'create-convidado', component: CreateConvidadoComponent},
  {path: '', redirectTo: 'convidados', pathMatch: 'full'},
  {path: 'update-convidado/:id', component: UpdateConvidadoComponent},
  {path: 'convidado-details/:id', component: ConvidadoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
