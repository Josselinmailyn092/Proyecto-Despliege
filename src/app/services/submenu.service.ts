import { Injectable } from '@angular/core';
import path from 'path';

@Injectable({
  providedIn: 'root'
})
export class SubmenuService {
private subMenuItems =[
  {
    label:'INICIO',
    path:'/inicio',
    subMenu: []
  },
  
  {
    label :'LICORES',
    path: '/licores',
    subMenu:[
        {label:'VINOS',path :'/licores/vinos'},
        {label:'CERVEZA',path :'/licores/cerveza'},
        {label:'WHISKEY',path :'/licores/whiskey'},
        {label:'BRANDY',path :'/licores/brandy'},
        {label:'VODKA',path :'/licores/vodka'},
        {label:'TEQUILA',path :'/licores/tequila'},
        {label:'GIN',path :'/licores/gin'}

      
    ]
  },

  //confiteria submenu 
  {
    label:'CONFITERIA',
    path:'/confiteria',
    subMenu:[
      {label:'GALLETAS', path:'/confiteria/galletas'},
      {label:'CHOCOLATES', path:'/confiteria/chocolates'},
      {label:'CHUPETES', path:'/confiteria/chupetes'},
      {label:'GOMITAS', path:'/confiteria/gomitas'},
      {label:'CARAMELOS', path:'/confiteria/caramelos'},
      {label:'CHICLE', path:'/confiteria/chicle'},
      {label:'SNAKS', path:'/confiteria/snaks'}
    ]

  },
  {
    label:'PROMOCIONES',
    path:'/promociones',
    subMenu: []
  },
  {
    label:'NOSOTROS',
    path:'/nosotros',
    subMenu: []
  },
  {
    label:'CONTACTO',
    path:'/contacto',
    subMenu: []
  },
];

geSubMenuItems() {
  return this.subMenuItems;
}
}
