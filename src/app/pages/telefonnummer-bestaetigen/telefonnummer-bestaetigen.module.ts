import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelefonnummerBestaetigenPageRoutingModule } from './telefonnummer-bestaetigen-routing.module';

import { TelefonnummerBestaetigenPage } from './telefonnummer-bestaetigen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelefonnummerBestaetigenPageRoutingModule
  ],
  declarations: [TelefonnummerBestaetigenPage]
})
export class TelefonnummerBestaetigenPageModule {}
