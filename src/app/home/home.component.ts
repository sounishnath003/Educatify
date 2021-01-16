import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ILoggedUser } from '../models/loggedUser.model';
import { SharedDataService } from '../services/sharedData.service';

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
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    if (sessionStorage['username']) {
      this.isAuthenticated = true;
      this.matSnackBar.open(
        `${sessionStorage['username']} You are now logged in!!`,
        '',
        { duration: 1200 }
      );
      const loggedInUser: ILoggedUser = JSON.parse(
        sessionStorage['loggedInUser']
      );
      this.sharedDataService.loggedInUserDetails = loggedInUser;
      console.log(this.sharedDataService.loggedInUserDetails);
    }
  }

  _authCheck() {
    this._router.queryParams.subscribe((params) => {
      this.isAuthenticated = params['isAuth'] == 'true' ? true : false;
    });
  }
}
