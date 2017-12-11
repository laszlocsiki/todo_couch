import { Component, OnInit } from '@angular/core';
import {ListService} from '../../shared/services/list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../../shared/model/task.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.taskList = this.listService.getOwnedTasks();
    this.listService.taskListChanged.subscribe(
      (tasks: Task[]) => {
        console.log(tasks);
        this.taskList = tasks;
      }
    );
    console.log(this.taskList);
  }

}
