import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  public email: string = '';
  public password: string = '';

  constructor(private _router: Router, private authService: AuthService) {}

  ngOnInit() {}

  setValue(e, type: string) {
    if (type === 'username') {
      this.email = e.target.value;
    } else {
      this.password = e.target.value;
    }
  }

  async loginAuth() {
    console.log(this.email, this.password);

    const resp = await this.authService.loginAuthorization(
      this.email,
      this.password
    );

    if (resp === null) {
      alert('Decide are you teacher/student?');
    } else {
      sessionStorage['username'] = resp.name;
      sessionStorage['loggedInUser'] = JSON.stringify(resp);
      window.location.reload();
    }
  }

  signup() {
    this._router.navigateByUrl('/auth/user/registration');
  }
}
