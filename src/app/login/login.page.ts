import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  loginClick() {
    console.log('login clicked');
  }
  registerClick() {
    console.log('clicked register');
  }
}
