import { Component } from '@angular/core';
import LinksService from 'src/app/services/links-data.service';
import DialogService from '../../services/dialog.service';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss'],
})
export default class LinksSectionComponent {
  constructor(
    private dialogService: DialogService,
    private linksServise: LinksService,
  ) {}

  public links = this.linksServise.getData();

  public openDialog($event: MouseEvent, section: string, topic: string) {
    this.dialogService.openDialog($event, section, topic);
  }
}
