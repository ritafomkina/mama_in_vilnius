import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import ChooseCountryDialogComponent from './components/choose-country-dialog/choose-country-dialog.component';
import ChooseInsuranseComponent from './components/choose-insurance/choose-insurance.component';

const materialComponents = [
  MatButtonModule, MatDialogModule,
];
const components = [
  ChooseCountryDialogComponent,
  ChooseInsuranseComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ...materialComponents,
  ],
  declarations: [
    ...components,
  ],
  exports: [...materialComponents, ...components],
})
export default class SharedModule { }
