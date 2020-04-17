import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelefonnummerBestaetigenPage } from './telefonnummer-bestaetigen.page';

const routes: Routes = [
  {
    path: '',
    component: TelefonnummerBestaetigenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonnummerBestaetigenPageRoutingModule {}
