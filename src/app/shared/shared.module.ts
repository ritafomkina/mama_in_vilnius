import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import ChooseCountryDialogComponent from './components/choose-country-dialog/choose-country-dialog.component';
import ChooseInsuranseComponent from './components/choose-insurance/choose-insurance.component';
import ErrorPageComponent from './components/error-page/error-page.component';

const materialModules = [
  MatButtonModule, MatDialogModule,
];
const components = [
  ChooseCountryDialogComponent,
  ChooseInsuranseComponent,
  ErrorPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
  ],
  declarations: [
    ...components,
  ],
  exports: [...materialModules, ...components],
})
export default class SharedModule { }
