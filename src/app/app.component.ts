import { Component, OnInit } from '@angular/core';
import DialogService from 'src/app/services/dialog.service';
import { LocationStrategy, Location } from '@angular/common';
import { Router } from '@angular/router';
import ModeService from './services/mode.service';
import PathService from './services/path.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  title = 'mums-app';

  constructor(
    private dialogService: DialogService,
    private pathService: PathService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private location: Location,
    private mode: ModeService,
  ) {
  }

  public isMobileMode = false;

  public dialog = false;

  public error = false;

  public hello = false;

  ngOnInit(): void {
    this.dialogService.isOpened();
    if (window.location.href.includes('pregnancy')
       || window.location.href.includes('birth')
       || window.location.href.includes('toddler')
       || window.location.href.includes('links')) {
      this.dialogService.isOpened();
    }
    // this.pathService.setPath();
    // this.router.navigateByUrl('hello');
    this.dialogService.helloDialog = true;
    this.dialogService.currentDialogStatus.subscribe((status) => {
      this.dialog = status;
    });
    this.isMobileMode = this.mode.isMobileMode();
  }

  // ngAfterCOntetnInit() {
  //   console.log(this.locationStrategy.path());
  // }
  // public closeDialog($event: MouseEvent) {
  //   if (this.dialog) {
  //     const el = $event?.target as HTMLElement;
  //     if ((el.closest('.dialog') && el.closest('.close-btn')) || !el.closest('.dialog')) {
  //       this.dialogService.isClosed();
  //       this.router.navigateByUrl(this.locationStrategy.getBaseHref());
  //     }
  //   }
  // }
}
