import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-insurance',
  templateUrl: './choose-insurance.component.html',
  styleUrls: ['./choose-insurance.component.scss'],
})
export default class ChooseInsuranseComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog,

  ) {}

  openDialog($event: MouseEvent, insurance: string) {
    $event.stopPropagation();
    this.router.navigateByUrl(`pregnancy/insurance/${insurance}`);
  }
}
