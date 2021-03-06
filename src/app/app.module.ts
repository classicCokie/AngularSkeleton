import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchListComponent } from './search-list/search-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { PersonProfileComponent } from './person-profile/person-profile.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchListComponent,
    PersonProfileComponent,
    LoginComponent,
    SignUpComponent,
    CreateProfileComponent,
    UserWelcomeComponent
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
