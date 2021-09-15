import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  registerClick(event: any) {
    console.log('type is: ' + typeof event);
    console.log('salut');
  }
}
