import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import BirthRoutingModule from './birth-routing.module';

import ClinicComponent from './components/clinic/clinic.component';
import DocumentsUAComponent from './components/documents-ua/documents-ua.component';
import DocumentsBELComponent from './components/documents-bel/documents-bel.component';
import DocumentsRUComponent from './components/documents-ru/documents-ru.component';
import MamashealthComponent from './components/mamashealth/mamashealth.component';
import DadsBenefitsComponent from './components/dads-benefits/dads-benefits.component';

@NgModule({
  declarations: [
    ClinicComponent,
    DocumentsUAComponent,
    DocumentsBELComponent,
    DocumentsRUComponent,
    MamashealthComponent,
    DadsBenefitsComponent,
  ],
  imports: [
    CommonModule,
    BirthRoutingModule,
  ],
})
export default class BirthModule { }
