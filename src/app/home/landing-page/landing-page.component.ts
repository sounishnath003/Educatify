import { AuthenticationComponent } from './../../authentication/authentication.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog(){
    const dialogRef = this.dialog.open(AuthenticationComponent, {
      width: '660px'
    });
  }
}
