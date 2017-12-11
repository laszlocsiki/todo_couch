import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../shared/model/user.model';
import {CouchService} from "../shared/services/couch.service";
import {ListService} from "../shared/services/list.service";

@Injectable()
export class AuthService {
  isLoggedIn = false;
  currentUser: string;
  usersCredentials: User[] = [
    new User('laszlo', 'laszlo'),
    new User('szilard', 'szilard'),
  ];

  constructor(private router: Router, private couchService: CouchService, private listService: ListService) { }

  signinUser(username: string, password: string) {
    const user: User = this.getUser(username);
    console.log(user);
    if (user.password === password) {
      this.isLoggedIn = true;
      this.currentUser = user.username;
      this.router.navigate(['/']);
      this.couchService.currentDB = user.username;
      this.listService.loadTaskList();
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = null;
    this.listService.clearTaskList();
    this.router.navigate(['/signin']);
  }

  getUser(username: string) {
    return this.usersCredentials.find( obj => obj.username === username);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }


}
