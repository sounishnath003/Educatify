import { Injectable } from '@angular/core';
import { ILoggedUser } from '../models/loggedUser.model';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  public loggedInUserDetails: ILoggedUser;

  constructor() {}
}
