import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInTelefonnummerPage } from './sign-in-telefonnummer.page';

const routes: Routes = [
  {
    path: '',
    component: SignInTelefonnummerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInTelefonnummerPageRoutingModule {}
