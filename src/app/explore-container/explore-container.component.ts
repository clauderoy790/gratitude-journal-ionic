import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  title: string;

  constructor() {
    this.title = '';
  }

  ngOnInit() {}

  clickIt() {
    let i = 10;
    i += 10;
    console.log(i);
    i -= 2;
    i++;
    this.title = 'it actually worked';
  }
}
