import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalRoutingModule } from './main-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageNotFoundComponent, LoginComponent],
  imports: [
    CommonModule,
    LocalRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
