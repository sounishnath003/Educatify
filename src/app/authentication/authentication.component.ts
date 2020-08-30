import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  signup(){
    this._router.navigateByUrl('/auth/user/registration') ;
  }
}
