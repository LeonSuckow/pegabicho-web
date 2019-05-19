import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './shared/input/input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from './security/login/login.service';
import { BaseService } from './service/baseService';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { BusinesRegisterComponent } from './register/busines-register/busines-register.component';
import { DocumentsRegisterComponent } from './register/documents-register/documents-register.component';
import { GeneralRegisterComponent } from './register/general-register/general-register.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { AddressRegisterComponent } from './register/address-register/address-register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InputComponent,
    UserComponent,
    RegisterComponent,
    BusinesRegisterComponent,
    DocumentsRegisterComponent,
    GeneralRegisterComponent,
    UserRegisterComponent,
    AddressRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
