import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import LinksRoutingModule from './links-routing.module';

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

@NgModule({
  declarations: [
    BabysittersComponent,
    ChatsComponent,
    DentistComponent,
    DoulasComponent,
    FeedBacksComponent,
    HelpinLTsComponent,
    HelpinUAComponent,
    KidsGoodsComponent,
    ReuseComponent,
    SecondHandsComponent,
  ],
  imports: [
    CommonModule,
    LinksRoutingModule,
  ],
})
export default class LinksModule { }
