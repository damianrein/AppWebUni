import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { InvestigationsComponent } from './components/investigations/investigations.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InvestigationInfoComponent } from './investigation-info/investigation-info.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'investigations',component:InvestigationsComponent},
  {path:'investigation-Info',component:InvestigationInfoComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
