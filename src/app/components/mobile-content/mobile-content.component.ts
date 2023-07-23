import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import BirthDataService from 'src/app/services/birth-data.service';
import DialogService from 'src/app/services/dialog.service';
import LinksDataService from 'src/app/services/links-data.service';
import PregnancyDataService from 'src/app/services/pregnancy-data.service';
import ToddlerDataService from 'src/app/services/toddler-data.service';

@Component({
  selector: 'app-mobile-content',
  templateUrl: './mobile-content.component.html',
  styleUrls: ['./mobile-content.component.scss'],
})
export default class MobileContentComponent implements OnInit {
  constructor(
    private pregnancyDataService: PregnancyDataService,
    private birthDataService: BirthDataService,
    private toddlerDataService: ToddlerDataService,
    private linksDataService: LinksDataService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private dialogService: DialogService,
  ) {}

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

  public pregnancyData: Data[];

  public birthData: Data[];

  public toddlerData: Data[];

  public linksData: Data[];

  public openSection(sectionName: string) {
    // eslint-disable-next-line default-case
    switch (sectionName) {
      case 'pregnancy':
        this.pregnancyData = this.pregnancyDataService.getData();
        break;
      case 'birth': this.birthData = this.birthDataService.getData();
        break;
      case 'toddler': this.toddlerData = this.toddlerDataService.getData();
        break;
      case 'links': this.linksData = this.linksDataService.getData();
        break;
    }
  }

  public openDialog($event: MouseEvent, section: string, topic: string) {
    $event.stopPropagation();
    const root = { section, topic };
    this.dialogService.setSourceData(root);
    this.dialogService.isOpened();
    document.body.classList.add('noscroll');
    this.router.navigate([root.section, root.topic]);
  }

  public renderContent(topic: string, i: number) {
    let section: string;
    // this.dialogService.setSourceData(root);
    // eslint-disable-next-line default-case
    switch (i) {
      case 0:
        section = 'pregnancy';
        // this.dialogService.setSourceData({ section, topic });
        this.router.navigate([section, topic]);
        break;
      case 1: this.router.navigate(['birth', topic]);
        break;
      case 2: this.router.navigate(['toddler', topic]);
        break;
      case 3: this.router.navigate(['links', topic]);
        break;
    }
  }
}
