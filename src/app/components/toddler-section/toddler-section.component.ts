import { Component } from '@angular/core';
import DialogService from 'src/app/services/dialog.service';
import ToddlerDataService from '../../services/toddler-data.service';

@Component({
  selector: 'app-toddler-section',
  templateUrl: './toddler-section.component.html',
  styleUrls: ['./toddler-section.component.scss'],
})
export default class ToddlerSectionComponent {
  constructor(
    private dialogService: DialogService,
    private dataService: ToddlerDataService,
  ) {}

  cards = this.dataService.getData();

  public openDialog($event: MouseEvent, section: string, topic: string) {
    this.dialogService.openDialog($event, section, topic);
  }
}
