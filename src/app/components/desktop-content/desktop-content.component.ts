import { Component, OnInit } from '@angular/core';
import DialogService from 'src/app/services/dialog.service';

@Component({
  selector: 'app-desktop-content',
  templateUrl: './desktop-content.component.html',
  styleUrls: ['./desktop-content.component.scss'],
})
export default class DesktopContentComponent implements OnInit {
  constructor(
    private dialogService: DialogService,
  ) {
  }

  public sections = ['Беременность', 'Малыш родился', 'Тоддлер', 'Полезные ссылки'];

  public dialog = false;

  ngOnInit(): void {
    this.dialogService.currentDialogStatus.subscribe((status) => {
      this.dialog = status;
    });
  }
}
