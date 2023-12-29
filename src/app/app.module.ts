import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Asegúrate de importar RouterModule y Routes
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import {AppRoutingModule} from "./app-routing.module";
import {Persons} from "./persons/Persons";
import {BrowserModule} from "@angular/platform-browser";
import {PersonsService} from "./persons/persons.service";


const routes: Routes = [
  {path: '',redirectTo: '',pathMatch: 'full'},
  {path: 'persons', component: PersonsComponent},


];
@NgModule({
  declarations: [
    AppComponent,
PersonsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
