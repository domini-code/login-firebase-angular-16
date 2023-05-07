import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `<app-auth-form [action]="'signIn'" />`,
})
export class SignInComponent {

}
