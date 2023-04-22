import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login/login.component';
import { HomeComponent } from './paginas/home/home/home.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
