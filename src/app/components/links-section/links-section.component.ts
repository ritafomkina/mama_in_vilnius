import { Component } from '@angular/core';
import { Router } from '@angular/router';
import LinksService from 'src/app/services/links-data.service';
import SectionNameService from '../../services/section-name.service';
import DialogService from '../../services/dialog.service';

@Component({
  selector: 'app-links-section',
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.scss'],
})
export default class LinksSectionComponent {
  constructor(
    private router: Router,
    private dialogService: DialogService,
    private sectionName: SectionNameService,
    private linksServise: LinksService,
  ) {}

  public links = this.linksServise.getData();

  public openDialog($event: MouseEvent, section: string, topic: string) {
    this.dialogService.openDialog($event, section, topic);
  }
}
