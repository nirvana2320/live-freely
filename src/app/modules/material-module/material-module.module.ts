import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule
  ]
})
export class MaterialModuleModule { }
