import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export default class PathService {
  constructor(
    private location: Location,
  ) { }

  private currentPath = '';

  public getPath() {
    return this.currentPath;
  }

  public setPath(path: string) {
    this.currentPath = path;
  }
}
