import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit() {
    let i = 20;
    i *= 2;
    console.log(i);
    i -= 4;
  }
}
