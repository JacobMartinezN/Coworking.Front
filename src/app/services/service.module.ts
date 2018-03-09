import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarService } from "./service.index";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],

  providers: [
    SidebarService
  ]
})
export class ServiceModule { }
