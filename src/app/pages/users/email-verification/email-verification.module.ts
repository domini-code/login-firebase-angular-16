import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerificationRoutingModule } from './email-verification-routing.module';
import { EmailVerificationComponent } from './email-verification.component';


@NgModule({
  declarations: [
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    EmailVerificationRoutingModule
  ]
})
export class EmailVerificationModule { }
