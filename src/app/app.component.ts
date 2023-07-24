import { Component, OnInit } from '@angular/core';
import DialogService from 'src/app/services/dialog.service';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import ModeService from './services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  title = 'mums-app';

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private locationStrategy: LocationStrategy,
    private mode: ModeService,
  ) {
  }

  public isMobileMode = false;

  public dialog = false;

  public error = false;

  ngOnInit(): void {
    if (window.location.href.includes('pregnancy')
       || window.location.href.includes('birth')
       || window.location.href.includes('toddler')
       || window.location.href.includes('links')) {
      this.dialogService.isOpened();
    }
    if (window.location.href.length > 31) {
      this.dialogService.isOpened();
    }
    this.dialogService.currentDialogStatus.subscribe((status) => {
      this.dialog = status;
    });
    this.isMobileMode = this.mode.isMobileMode();
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
