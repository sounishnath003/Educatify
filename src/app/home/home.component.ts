import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: Boolean = true ;

  constructor(private _router: ActivatedRoute) { }

  ngOnInit() {
    // this._authCheck() ;
  }

  _authCheck() {
    this._router.queryParams.subscribe((params) => {
      this.isAuthenticated = params['isAuth'] == 'true' ? true : false ;
    });
  }

}
