import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'user/sign-up',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/users/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'user/sign-in',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/users/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
  },
  {
    path: 'user/profile',
    loadChildren: () =>
      import('./pages/users/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'user/email-verification',
    loadChildren: () =>
      import('./pages/users/email-verification/email-verification.module').then(
        (m) => m.EmailVerificationModule
      ),
  },
  {
    path: 'user/forgot-password',
    loadChildren: () =>
      import('./pages/users/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
