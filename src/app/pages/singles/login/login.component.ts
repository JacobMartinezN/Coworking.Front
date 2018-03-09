import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit() {
    init_plugins();
  }

  login(){
    console.log('Ingresando...');
    this._router.navigate(['/dashboard']);
  }

}
