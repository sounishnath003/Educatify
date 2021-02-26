import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './../Material/Material.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';

import { AuthService } from "../services/auth.service";

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule, MaterialModule],
  declarations: [AuthenticationComponent, SignupComponent],
  providers: [AuthService]
})
export class AuthenticationModule {}
