import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export default class HelloComponent implements OnInit {
  ngOnInit() {
    console.log('init hello');
  }
}
