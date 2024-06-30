import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationBarComponent } from './components/navegation-bar/navegation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './components/home/home.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { InvestigationsComponent } from './components/investigations/investigations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationBarComponent,
    FooterComponent,
    LoginPageComponent,
    HomeComponent,
    FacultiesComponent,
    InvestigationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
