import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DialogService from 'src/app/services/dialog.service';
import SectionNameService from 'src/app/services/section-name.service';

@Component({
  selector: 'app-choose-country-dialog',
  templateUrl: './choose-country-dialog.component.html',
  styleUrls: ['./choose-country-dialog.component.scss'],
})
export default class ChooseCountryDialogComponent implements OnInit {
  constructor(
    private router: Router,
    private sectionName: SectionNameService,
    private doalogService: DialogService,
  ) {}

  private section: string;

  private topic: string;

  ngOnInit(): void {
    this.doalogService.currentSourceData.subscribe((data) => {
      this.section = data.section;
      this.topic = data.topic;
    });
  }

  openDialog($event: MouseEvent, country: string) {
    $event.stopPropagation();
    this.router.navigateByUrl(`${this.section}/${this.topic}/${country}`);
  }
}
