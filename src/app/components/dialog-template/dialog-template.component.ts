import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DialogService from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss'],
})
export default class DialogTemplateComponent implements OnInit {
  constructor(
    private dialogService: DialogService,
    private router: Router,
    private locationStrategy: LocationStrategy,
  ) {
  }

  public dialog = false;

  ngOnInit(): void {
    this.dialogService.currentDialogStatus.subscribe((status) => {
      this.dialog = status;
    });
  }

  public closeDialog($event: MouseEvent) {
    if (this.dialog) {
      const el = $event?.target as HTMLElement;
      if ((el.closest('.dialog') && el.closest('.close-btn')) || !el.closest('.dialog')) {
        this.dialogService.isClosed();
        this.router.navigateByUrl(this.locationStrategy.getBaseHref());
      }
    }
  }
}
