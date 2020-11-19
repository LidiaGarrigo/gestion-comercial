import { MaterialModule } from './shared/material/material.module';
import { CommonsModule } from './commons/commons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierDetailComponent } from './supplier/supplier-detail/supplier-detail.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    SupplierListComponent,
    SupplierDetailComponent,
    /* MatFormFieldControl */

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
