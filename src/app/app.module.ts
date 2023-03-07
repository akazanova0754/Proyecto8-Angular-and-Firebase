import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './Components/lista/lista.component';
import { ActualizaComponent } from './Components/actualiza/actualiza.component';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { FormsModule } from '@angular/forms';

import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';

import {AngularFireModule} from '@angular/fire/compat';
import { enviroment } from 'src/enviroments/enviroments';
import { MenuComponent } from './Components/Shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ActualizaComponent,
    AgregarComponent,
    ErrorComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(enviroment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
