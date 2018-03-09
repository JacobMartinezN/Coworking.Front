import { Component, OnInit } from '@angular/core';
import { SidebarService } from "../../services/service.index";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  public menu:any[];

  constructor(private _sidebarService:SidebarService) {
    this.menu = _sidebarService.menu;
   }


  ngOnInit() {
    console.log(this.menu);
  }

}
