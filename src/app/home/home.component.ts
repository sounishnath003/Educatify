import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILoggedUser } from '../models/loggedUser.model';
import { SharedDataService } from '../services/sharedData.service';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template: `
    <app-header></app-header>

    <ng-container *ngIf="isAuthenticated == true; else notAuthenticated">
      <div class="max-w-5xl pt-6 mx-auto m-auto">
        <div class="rounded-lg px-2">
          <router-outlet></router-outlet>
        </div>
      </div>
    </ng-container>
    <ng-template #notAuthenticated>
      <app-landing-page></app-landing-page>
    </ng-template>
  `,
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
