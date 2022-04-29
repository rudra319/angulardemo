import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserAuthComponent } from './user-auth.component';
import { HelloWorldComponent } from './../hello-world/hello-world.component';


@NgModule({
  declarations: [
    SignInComponent,
    UserAuthComponent,
    HelloWorldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserAuthComponent,
    SignInComponent,
    HelloWorldComponent
  ]
})
export class UserAuthModule { }
