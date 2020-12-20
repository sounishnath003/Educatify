import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  loginAuth() {
    console.log("i am loggedin");
    
  }

  signup() {
    this._router.navigateByUrl('/auth/user/registration');
  }
}
