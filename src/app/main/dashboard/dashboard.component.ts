import { Component, OnInit } from '@angular/core';
import {ListService} from "../../shared/services/list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Task} from "../../shared/model/task.model";
import {AnonymousSubscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskLists: Task[] = [];
  activeTaskList: Task[] = [];
  completedTaskList: Task[] = [];
  searchText: string;

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.taskLists = this.listService.taskList;
    this.listService.taskListChanged.subscribe(
      (tasks: Task[]) => {
        this.taskLists = tasks;
        this.activeTaskList = this.taskLists.filter(
          obj => obj.completed === 0
        );
        this.completedTaskList = this.taskLists.filter(
          obj => obj.completed === 1
        );
      }
    );
    this.activeTaskList = this.taskLists.filter(
      obj => obj.completed === 0
    );
    this.completedTaskList = this.taskLists.filter(
      obj => obj.completed === 1
    );
  }

}
