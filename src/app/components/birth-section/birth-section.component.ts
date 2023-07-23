import { Component } from '@angular/core';
import { Router } from '@angular/router';
import BirthDataService from '../../services/birth-data.service';
import DialogService from '../../services/dialog.service';
import SectionNameService from '../../services/section-name.service';

@Component({
  selector: 'app-birth-section',
  templateUrl: './birth-section.component.html',
  styleUrls: ['./birth-section.component.scss'],
})
export default class BirthSectionComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sectionName: SectionNameService,
    private dataService: BirthDataService,
  ) {}

  cards = this.dataService.getData();

  public openDialog($event: MouseEvent, section: string, topic: string) {
    this.dialogService.openDialog($event, section, topic);
  }
}
