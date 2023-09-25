import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ChooseKindergartenComponent from './components/choose-kindergarten/choose-kindergarten.component';
import KindergartenApplicationComponent from './components/kindergarten-application/kindergarten-application.component';
import KindergartenDocumentsnComponent from './components/kindergarten-documents/kindergarten-documents.component';
import KindergartenPriceComponent from './components/kindergarten-price/kindergarten-price.component';
import KidsHealthComponent from './components/kids-health/kids-health.component';
import KidsActivitiesComponent from './components/kids-activities/kids-activities.component';
import KidsEntertainmentComponent from './components/kids-entertainment/kids-entertainment.component';
import KidsPoolstComponent from './components/kids-pools/kids-pools.component';
import KidsMoneyComponent from './components/kids-money/kids-money.component';
import PlaygroundsComponent from './components/playgrounds/playgrounds.component';

const routes: Routes = [
  {
    path: 'choose-kindergarten', component: ChooseKindergartenComponent,
  },
  {
    path: 'kindergarten-price', component: KindergartenPriceComponent,
  },
  {
    path: 'kindergarten-application', component: KindergartenApplicationComponent,
  },
  {
    path: 'kindergarten-documents', component: KindergartenDocumentsnComponent,
  },
  {
    path: 'kids-health', component: KidsHealthComponent,
  },
  {
    path: 'kids-money', component: KidsMoneyComponent,
  },
  {
    path: 'kids-entertainment', component: KidsEntertainmentComponent,
  },
  {
    path: 'kids-activities', component: KidsActivitiesComponent,
  },
  {
    path: 'kids-pools', component: KidsPoolstComponent,
  },
  {
    path: 'playgrounds', component: PlaygroundsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class ToddlerRoutingModule { }
