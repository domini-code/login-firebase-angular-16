import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { AuthFormComponent } from '@app/shared/components/auth-form/auth-form.component';


@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, AuthFormComponent],
})
export class SignInModule {}
