// src/app/components/components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopHomeComponent } from './shared/menu-top-home/menu-top-home.component';

@NgModule({
  declarations: [
    MenuTopHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ComponentsModule {}
