import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {ListService} from "../../shared/services/list.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private listService: ListService) { }

  ngOnInit() {
  }

  updateList() {
    this.listService.loadTaskList();
  }
}
