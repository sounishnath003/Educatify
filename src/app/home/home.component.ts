import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private matSnackBar: MatSnackBar,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.checkIfAnyUserSignedIn();
  }

  checkIfAnyUserSignedIn(): void {
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
}
