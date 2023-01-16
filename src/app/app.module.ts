import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './My_Application/dashbord/dashbord.component';
import { FooterComponent } from './My_Application/dashbord/footer/footer.component';
import { AboutComponent } from './My_Application/dashbord/about/about.component';
import { HomeComponent } from './My_Application/dashbord/home/home.component';
import { TempComponent } from './My_Application/dashbord/temp/temp.component';
import { PAYMENTComponent } from './My_Application/dashbord/payment/payment.component';
import { LoginComponent } from './My_Application/dashbord/login/login.component';
import { RegisterComponent } from './My_Application/dashbord/register/register.component';
import { TermsComponent } from './My_Application/dashbord/terms/terms.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './My_Application/main/main.component';
import { ShoesComponent } from './My_Application/shoes/shoes.component';
import { WatchComponent } from './My_Application/watch/watch.component';
import { GlassesComponent } from './My_Application/glasses/glasses.component';
import { HeadphonesComponent } from './My_Application/headphones/headphones.component';
import { BagsComponent } from './My_Application/bags/bags.component';


@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TempComponent,
    PAYMENTComponent,
    LoginComponent,
    RegisterComponent,
    TermsComponent,
    MainComponent,
    ShoesComponent,
    WatchComponent,
    GlassesComponent,
    HeadphonesComponent,
    BagsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
