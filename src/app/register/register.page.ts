import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss', '../login/login.page.scss'],
})
export class RegisterPage implements OnInit {
  email = '';
  password = '';
  verifyPassword = '';

  constructor() {}

  ngOnInit() {}

  registerClick() {
    console.log('register click');
  }
}
