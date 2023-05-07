import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { AuthFormComponent } from '@app/shared/components/auth-form/auth-form.component';


@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, SignUpRoutingModule, AuthFormComponent],
})
export class SignUpModule {}
