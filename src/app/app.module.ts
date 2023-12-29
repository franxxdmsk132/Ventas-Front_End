import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Asegúrate de importar RouterModule y Routes
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { routes } from './app.routes';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    // ... otros componentes
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
