import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';









@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
      LoginComponent,
      RegisterComponent,
     
  ],


  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
