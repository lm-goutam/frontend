import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { AboutComponent } from './My_Application/dashbord/about/about.component';
import { LoginComponent } from './My_Application/dashbord/login/login.component';
import { PAYMENTComponent } from './My_Application/dashbord/payment/payment.component';
import { RegisterComponent } from './My_Application/dashbord/register/register.component';
import { TermsComponent } from './My_Application/dashbord/terms/terms.component';


const routes: Routes = [
// {
//   path:'',
//   component: AppComponent
// },

{
  path:'about',
  component: AboutComponent
},
{
  path:'PAYMENT',
  component: PAYMENTComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'terms',
  component: TermsComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
