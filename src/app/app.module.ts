import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import Core from './core/core.module';
import SharedModule from './shared/shared.module';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import StartSectionComponent from './components/start-section/start-section.component';
import SectionSeparatorComponent from './components/section-separator/section-separator.component';
import PregnancySectionComponent from './components/pregnancy-section/pregnancy-section.component';
import BirthSectionComponent from './components/birth-section/birth-section.component';
import ToddlerSectionComponent from './components/toddler-section/toddler-section.component';
import LinksSectionComponent from './components/links-section/links-section.component';
import DesktopContentComponent from './components/desktop-content/desktop-content.component';
import MobileContentComponent from './components/mobile-content/mobile-content.component';
import DialogTemplateComponent from './components/dialog-template/dialog-template.component';

@NgModule({
  declarations: [
    AppComponent,
    StartSectionComponent,
    SectionSeparatorComponent,
    PregnancySectionComponent,
    BirthSectionComponent,
    ToddlerSectionComponent,
    LinksSectionComponent,
    DesktopContentComponent,
    MobileContentComponent,
    DialogTemplateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    Core,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { scrollStrategy: new NoopScrollStrategy() },
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule { }
