import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInTelefonnummerPageRoutingModule } from './sign-in-telefonnummer-routing.module';

import { SignInTelefonnummerPage } from './sign-in-telefonnummer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInTelefonnummerPageRoutingModule
  ],
  declarations: [SignInTelefonnummerPage]
})
export class SignInTelefonnummerPageModule {}
