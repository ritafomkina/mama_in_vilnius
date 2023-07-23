import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import BabysittersComponent from './components/babysitters/babysitters.component';
import ChatsComponent from './components/chats/chats.component';
import DentistComponent from './components/dentist/dentist.component';
import DoulasComponent from './components/doulas/doulas.component';
import FeedBacksComponent from './components/feed-backs/feed-backs.component';
import HelpinLTsComponent from './components/helpin-lt/helpin-lt.component';
import HelpinUAComponent from './components/helpin-ua/helpin-ua.component';
import KidsGoodsComponent from './components/kids-goods/kids-goods.component';
import ReuseComponent from './components/reuse/reuse.component';
import SecondHandsComponent from './components/second-hands/second-hands.component';

const routes: Routes = [
  {
    path: 'babysitters', component: BabysittersComponent,
  },
  {
    path: 'chats', component: ChatsComponent,
  },
  {
    path: 'dentists', component: DentistComponent,
  },
  {
    path: 'doulas', component: DoulasComponent,
  },
  {
    path: 'feedbacks', component: FeedBacksComponent,
  },
  {
    path: 'helpin-lt', component: HelpinLTsComponent,
  },
  {
    path: 'helpin-ua', component: HelpinUAComponent,
  },
  {
    path: 'kids-goods', component: KidsGoodsComponent,
  },
  {
    path: 'reuse', component: ReuseComponent,
  },
  {
    path: 'second-hands', component: SecondHandsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class LinksRoutingModule { }
