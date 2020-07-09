import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContenidoPortadaComponent } from './components/contenido-portada/contenido-portada.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    HeaderComponent,
    FooterComponent,
    ContenidoPortadaComponent,
    AcercaDeComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
