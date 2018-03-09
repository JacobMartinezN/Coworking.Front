import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  public titleOfPage:string;
  public subTitlePage:string='';

  constructor( private _router:Router, private _title:Title, private _meta:Meta) {
    
    this.getDataRoute()
    .subscribe( data =>{
        console.log(data);
        this.titleOfPage = data.title;
        this._title.setTitle(data.title);

        let metaTag:MetaDefinition = {
          name: 'description',
          content: this.titleOfPage
        }

        this._meta.updateTag(metaTag);
    });
   }

  ngOnInit() {
  }

  getDataRoute():any{

    return this._router.events
      .filter( event => event instanceof ActivationEnd )
      .filter( (event:ActivationEnd) => event.snapshot.firstChild == null )
      .map( (event:ActivationEnd)=> event.snapshot.data )
  }

}
