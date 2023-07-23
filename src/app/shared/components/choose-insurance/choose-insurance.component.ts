import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import DialogService from '../../../services/dialog.service';

@Component({
  selector: 'app-choose-insurance',
  templateUrl: './choose-insurance.component.html',
  styleUrls: ['./choose-insurance.component.scss'],
})
export default class ChooseInsuranseComponent {
  constructor(
    private router: Router,
    private routerParams: ActivatedRoute,
    public dialog: MatDialog,
    private dialogService: DialogService,

  ) {}

  openDialog($event: MouseEvent, insurance: string) {
    $event.stopPropagation();
    this.router.navigateByUrl(`pregnancy/insurance/${insurance}`);
  }
}
