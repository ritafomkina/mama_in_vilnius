import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import PregnancyRoutingModule from './pregnancy-routing.module';
import BenefitsComponent from './components/benefits/benefits.component';
import EmploymentComponent from './components/employment/employment.component';
import HospitalsComponent from './components/hospitals/hospitals.component';
import PriceBELComponent from './components/price-bel/price-bel.component';
import PriceUAComponent from './components/price-ua/price-ua.component';
import RegistrationBELComponent from './components/registration-bel/registration-bel.component';
import RegistrationUAComponent from './components/registration-ua/registration-ua.component';
import VeiklaComponent from './components/veikla/veikla.component';

@NgModule({
  declarations: [
    BenefitsComponent,
    EmploymentComponent,
    HospitalsComponent,
    PriceBELComponent,
    PriceUAComponent,
    RegistrationBELComponent,
    RegistrationUAComponent,
    VeiklaComponent,
  ],
  imports: [
    CommonModule,
    PregnancyRoutingModule,
  ],
})
export default class PregnancyModule { }
