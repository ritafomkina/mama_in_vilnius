import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import ToddlerRoutingModule from './toddler-routing.module';

import ChooseKindergartenComponent from './components/choose-kindergarten/choose-kindergarten.component';
import KindergartenApplicationComponent from './components/kindergarten-application/kindergarten-application.component';
import KindergartenDocumentsnComponent from './components/kindergarten-documents/kindergarten-documents.component';
import KindergartenPriceComponent from './components/kindergarten-price/kindergarten-price.component';
import KidsHealthComponent from './components/kids-health/kids-health.component';
import KidsActivitiesComponent from './components/kids-activities/kids-activities.component';
import KidsEntertainmentComponent from './components/kids-entertainment/kids-entertainment.component';
import KidsPoolstComponent from './components/kids-pools/kids-pools.component';
import KidsMoneyComponent from './components/kids-money/kids-money.component';

@NgModule({
  declarations: [
    ChooseKindergartenComponent,
    KindergartenApplicationComponent,
    KindergartenDocumentsnComponent,
    KindergartenPriceComponent,
    KidsHealthComponent,
    KidsActivitiesComponent,
    KidsEntertainmentComponent,
    KidsPoolstComponent,
    KidsMoneyComponent,
  ],
  imports: [
    CommonModule,
    ToddlerRoutingModule,
  ],
})
export default class ToddlerModule { }
