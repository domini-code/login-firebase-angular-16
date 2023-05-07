import { Component, OnInit, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email!: FormControl;
  isEmailSent = false;
  private authSvc = inject(AuthService);
  private readonly emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  ngOnInit(): void {
    this.initEmailField();
  }

  hasError(): boolean {
    return !!this.email.invalid && this.email.touched;
  }

  async onSubmit(event: Event): Promise<void> {
    event?.stopPropagation();
    try {
      this.isEmailSent = true;
      await this.authSvc.sendPasswordResetEmail(this.email?.value);
    } catch (error: unknown) {
       this.isEmailSent = false;
      console.log('Reset password', error);
    }
  }

  private initEmailField(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailPattern),
    ]);
  }
}
