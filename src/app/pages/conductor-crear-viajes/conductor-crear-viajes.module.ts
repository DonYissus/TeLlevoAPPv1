import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConductorCrearViajesPageRoutingModule } from './conductor-crear-viajes-routing.module';

import { ConductorCrearViajesPage } from './conductor-crear-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConductorCrearViajesPageRoutingModule
  ],
  declarations: [ConductorCrearViajesPage]
})
export class ConductorCrearViajesPageModule {}
