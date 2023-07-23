import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogData } from '../models/dialog.model';

@Injectable({
  providedIn: 'root',
})
export default class DialogService {
  constructor(
    private router: Router,
  ) {
  }

  public currentDialog: MatDialogRef<any>;

  toggleScroll() {
    document.body.classList.toggle('noscroll');
  }

  private open = new BehaviorSubject<boolean>(false);

  public currentDialogStatus = this.open.asObservable();

  public isOpened(): void {
    this.open.next(true);
    this.toggleScroll();
  }

  public isClosed(): void {
    this.open.next(false);
    this.toggleScroll();
  }

  private sourceData = new BehaviorSubject<DialogData>({ section: 'default', topic: 'default' });

  public currentSourceData = this.sourceData.asObservable();

  public setSourceData(dialogData: DialogData): void {
    this.sourceData.next(dialogData);
  }

  public toggleScrolling() {
    document.body.classList.add('no-scroll');
    this.currentDialog?.afterClosed().subscribe(() => {
      document.body.classList.remove('no-scroll');
      this.isClosed();
    });
  }

  public openDialog($event: MouseEvent, section: string, topic: string) {
    $event.stopPropagation();
    const root = { section, topic };
    this.setSourceData(root);
    this.isOpened();
    document.body.classList.add('noscroll');
    this.router.navigate([root.section, root.topic]);
  }
}
