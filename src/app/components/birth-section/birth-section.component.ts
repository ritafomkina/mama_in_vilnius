import { Component } from '@angular/core';
import BirthDataService from '../../services/birth-data.service';
import DialogService from '../../services/dialog.service';

@Component({
  selector: 'app-birth-section',
  templateUrl: './birth-section.component.html',
  styleUrls: ['./birth-section.component.scss'],
})
export default class BirthSectionComponent {
  constructor(
    private dialogService: DialogService,
    private dataService: BirthDataService,
  ) {}

  cards = this.dataService.getData();

  public openDialog($event: MouseEvent, section: string, topic: string) {
    this.dialogService.openDialog($event, section, topic);
  }
}
