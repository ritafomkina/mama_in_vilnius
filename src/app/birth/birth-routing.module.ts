import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ClinicComponent from './components/clinic/clinic.component';
import DocumentsUAComponent from './components/documents-ua/documents-ua.component';
import DocumentsBELComponent from './components/documents-bel/documents-bel.component';
import DocumentsRUComponent from './components/documents-ru/documents-ru.component';
import MamashealthComponent from './components/mamashealth/mamashealth.component';
import DadsBenefitsComponent from './components/dads-benefits/dads-benefits.component';
import ChooseCountryDialogComponent from '../shared/components/choose-country-dialog/choose-country-dialog.component';

const routes: Routes = [
  {
    path: 'clinic', component: ClinicComponent,
  },
  { path: 'documents', component: ChooseCountryDialogComponent },
  { path: 'documents/UA', component: DocumentsUAComponent },
  { path: 'documents/BEL', component: DocumentsBELComponent },
  { path: 'documents/RU', component: DocumentsRUComponent },
  {
    path: 'health', component: MamashealthComponent,
  },
  {
    path: 'dads-benefits', component: DadsBenefitsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class BirthRoutingModule { }
