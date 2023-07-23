import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class ModeService {
  public isMobileMode() {
    return window.innerWidth < 1055;
  }
}
