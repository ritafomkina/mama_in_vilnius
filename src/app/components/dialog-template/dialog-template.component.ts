import { LocationStrategy, Location } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import DialogService from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['./dialog-template.component.scss'],
})
export default class DialogTemplateComponent implements OnInit, AfterViewInit {
  public helloPath = false;

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private location: Location,
  ) {
  }

  public dialog = false;

  public dialogText = 'загрузка...';

  ngOnInit(): void {
    this.dialogService.currentDialogStatus.subscribe((status) => {
      this.dialog = status;
    });
  }

  ngAfterContentInit() {
    this.helloPath = this.location.isCurrentPathEqualTo('/hello');
    console.log(this.helloPath);
    console.log(this.location.path());
  }

  ngAfterViewInit(): void {
    this.dialogText = 'закрыть';
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
