import { Component } from '@angular/core';
import DialogService from 'src/app/services/dialog.service';
import PregnancyDataService from '../../services/pregnancy-data.service';

@Component({
  selector: 'app-pregnancy-section',
  templateUrl: './pregnancy-section.component.html',
  styleUrls: ['./pregnancy-section.component.scss'],
})
export default class PregnancySectionComponent {
  constructor(
    private dialogService: DialogService,
    private pregnancyDataService: PregnancyDataService,
  ) {}

  cards = this.pregnancyDataService.getData();

  public openDialog($event: MouseEvent, section: string, topic: string) {
    this.dialogService.openDialog($event, section, topic);
  }
}
