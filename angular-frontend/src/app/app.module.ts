import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvidadoListComponent } from './convidado-list/convidado-list.component';
import { CreateConvidadoComponent } from './create-convidado/create-convidado.component';
import { FormsModule } from '@angular/forms';
import { UpdateConvidadoComponent } from './update-convidado/update-convidado.component';
import { ConvidadoDetailsComponent } from './convidado-details/convidado-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvidadoListComponent,
    CreateConvidadoComponent,
    UpdateConvidadoComponent,
    ConvidadoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
