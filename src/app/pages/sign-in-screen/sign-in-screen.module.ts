import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInScreenPageRoutingModule } from './sign-in-screen-routing.module';

import { SignInScreenPage } from './sign-in-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInScreenPageRoutingModule
  ],
  declarations: [SignInScreenPage]
})
export class SignInScreenPageModule {}
