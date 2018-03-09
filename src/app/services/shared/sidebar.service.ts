import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  public menu:any = [
    {
      titulo: 'Dashboard',
      url: '/dashboard',
      icono: 'fa fa-tachometer',
      active: 'active',
      class: '',
      classA: '',
      submenu: []
    },
    {
      titulo: 'Noticias',
      icono: 'fa fa-bell',
      url: '/noticias',
      active: 'active',
      class: '',
      classA: '',
      submenu: []
    },
    {
      titulo: 'Principal',
      icono: 'fa fa-list',
      url:'void(0)',
      active: 'open active',
      class: 'dropdown',
      classA: 'dropdown-toggle',
      submenu: [

        { titulo: 'Perfil', url: '/perfil' },
      ]
    },
    {
      titulo: 'Reservas',
      icono: 'fa fa-bell',
      url: '/reservas',
      active: 'active',
      class: '',
      classA: '',
      submenu: []

    },
    {
      titulo: 'Prueba',
      icono: 'fa fa-list',
      url:'void(0)',
      active: 'open active',
      class: 'dropdown',
      classA: 'dropdown-toggle',
      submenu: [

        { titulo: 'Perfil', url: '/perfil' },
        { titulo : 'Prueba', url: '/notfound'}
      ]
    }
  ];

  constructor() { }

}
