import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ChooseCountryDialogComponent from '../shared/components/choose-country-dialog/choose-country-dialog.component';
import ChooseInsuranseComponent from '../shared/components/choose-insurance/choose-insurance.component';
import BenefitsComponent from './components/benefits/benefits.component';
import EmploymentComponent from './components/employment/employment.component';
import HospitalsComponent from './components/hospitals/hospitals.component';
import PriceBELComponent from './components/price-bel/price-bel.component';
import PriceUAComponent from './components/price-ua/price-ua.component';
import RegistrationBELComponent from './components/registration-bel/registration-bel.component';
import RegistrationUAComponent from './components/registration-ua/registration-ua.component';
import VeiklaComponent from './components/veikla/veikla.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseCountryDialogComponent,
  },
  {
    path: 'registration',
    component: ChooseCountryDialogComponent,
  },
  { path: 'registration/UA', component: RegistrationUAComponent },
  { path: 'registration/BEL', component: RegistrationBELComponent },
  { path: 'registration/RU', component: RegistrationBELComponent },
  {
    path: 'hospitals', component: HospitalsComponent,
  },
  {
    path: 'price', component: ChooseCountryDialogComponent,
  },
  { path: 'price/UA', component: PriceUAComponent },
  { path: 'price/BEL', component: PriceBELComponent },
  { path: 'price/RU', component: PriceBELComponent },
  { path: 'insurance', component: ChooseInsuranseComponent },
  { path: 'insurance/employment', component: EmploymentComponent },
  { path: 'insurance/veikla', component: VeiklaComponent },
  { path: 'benefits', component: BenefitsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class PregnancyRoutingModule {
}
