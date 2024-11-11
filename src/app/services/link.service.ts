import { Injectable } from '@angular/core';

interface Link {
  // Difine estructura del enlace con dos propiedades 
  path: string;
  label: string;
}
// Poder inyectar servicio en otro componente o servicio
@Injectable({
  // Disponible en toda la app 
  providedIn: 'root'
})
export class LinkService {
  // links un array de objetos Link
  links: Link[] = [
    { path: '/home', label: 'INICIO' },
    { path: '/licores', label: 'LICORES' },
    { path: '/confiteria', label: 'CONFITERIA' },
    { path: '/promociones', label: 'PROMOCIONES' },
    { path: '/nosotros', label: 'NOSOTROS' },
    { path: '/contacto', label: 'CONTACTO' }
  ];

  // devuleve array de enlaces de links 
  getLinks() :Link[]{
    return this.links;
  }
}
