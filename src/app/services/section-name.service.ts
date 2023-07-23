import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class SectionNameService {
  private section = new BehaviorSubject<string>('');

  public currentSection = this.section.asObservable();

  public openedSection(name: string): void {
    this.section.next(name);
  }
}
