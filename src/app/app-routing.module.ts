import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de los componentes
import { HomeComponent } from './pages/home/home.component';
import {LicoresComponent} from './pages/licores/licores.component';
import { ConfiteriaComponent } from './pages/confiteria/confiteria.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CaramelosComponent } from './pages/confiteria/caramelos/caramelos.component';
import { ChicleComponent } from './pages/confiteria/chicle/chicle.component';
import { ChocolateComponent } from './pages/confiteria/chocolate/chocolate.component';
import { ChupetesComponent } from './pages/confiteria/chupetes/chupetes.component';
import { GalletasComponent } from './pages/confiteria/galletas/galletas.component';
import { GomitasComponent } from './pages/confiteria/gomitas/gomitas.component';
import { SnaksComponent } from './pages/confiteria/snaks/snaks.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'licores',
    loadChildren: () => import('./pages/licores/licores.module').then(m => m.LicoresModule)
 
    
    },
  { 
    path: 'confiteria',
     component: ConfiteriaComponent ,
     children: [
      { path: 'galletas', component: GalletasComponent },
      { path: 'chocolates', component: ChocolateComponent },
      { path: 'chupetes', component: ChupetesComponent },
      { path: 'gomitas', component: GomitasComponent },
      { path: 'caramelos', component: CaramelosComponent },
      { path: 'chicle', component: ChicleComponent },
      { path: 'snaks', component: SnaksComponent },
      
      
      
      
    ]
    },
  { path: 'promociones', component: PromocionesComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirecciona a /home por defecto
  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Redirecciona a /home para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
