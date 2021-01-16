import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ILoggedUser } from '../models/loggedUser.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isAuthenticated: Boolean = false;

  constructor(
    private _router: ActivatedRoute,
    private matSnackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (sessionStorage['username']) {
      this.isAuthenticated = true;
      this.matSnackBar.open(
        `${sessionStorage['username']} You are now logged in!!`,
        '',
        { duration: 1200 }
      );
      /*
          sessionStorage['username'] = resp.name;
          sessionStorage['studentCode'] = resp.studentCode;
          sessionStorage['email'] = resp.email;
          sessionStorage['classrooms'] =
      */
     const loggedInUser: ILoggedUser = JSON.parse(sessionStorage['loggedInUser']);
     this.authService.loggedInUserDetails = loggedInUser;
     console.log(this.authService.loggedInUserDetails);
    }
    // this._authCheck() ;
  }

  _authCheck() {
    this._router.queryParams.subscribe((params) => {
      this.isAuthenticated = params['isAuth'] == 'true' ? true : false;
    });
  }
}
