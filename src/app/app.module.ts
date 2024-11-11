import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { UserOutline, ShoppingCartOutline, QuestionCircleOutline } from '@ant-design/icons-angular/icons';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule aquí
import { MenuOutline } from '@ant-design/icons-angular/icons';
import { PagesModule } from './pages/pages.module';
import { LicoresModule } from './pages/licores/licores.module';
registerLocaleData(en);

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,  NzSelectModule,
    FormsModule,
    
    RouterModule,
    CoreModule,
    SharedModule,
    FeaturesModule,
    PagesModule,
    
    FormsModule // Asegúrate de crear este módulo si es necesario
  ],
  providers: [
   
  
   {provide: NZ_ICONS, useValue: [ MenuOutline, UserOutline, ShoppingCartOutline, QuestionCircleOutline ]}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
