import { Injectable } from '@angular/core';
import {Task } from '../model/task.model';
import {Subject} from 'rxjs/Subject';
import {CouchService} from './couch.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ListService {
  private _taskList: Task[] = [];
  public taskListChanged = new Subject<Task[]>();
  constructor(private couchService: CouchService) {}

  public loadTaskList() {
    this._taskList = [];
    this.couchService.getDocuments().subscribe(
      (response: Response) => {
        console.log(response['rows']);
        for (const row of response['rows']) {
          const doc = row['doc'];
          const task: Task = new Task(
            doc['_id'],
            doc['title'],
            doc['description'],
            doc['completed'],
            doc['_rev'],
            true
          );
          this.addTask(task);
        }
      });

    this.couchService.getOthersDocuments().subscribe(
      (response: Response) => {
        console.log(response['rows']);
        for (const row of response['rows']) {
          const doc = row['doc'];
          const task: Task = new Task(
            doc['_id'],
            doc['title'],
            doc['description'],
            doc['completed'],
            doc['_rev'],
            false
          );
          this.addTask(task);
        }
      });
  }

  public addTask(task: Task) {
    this._taskList.push(task);
    this.taskListChanged.next(this._taskList);
  }

  public addTaskByTitle(title: string) {
    const bulkTask: Task = new Task(
      '0',
      title,
      '',
      0,
      '',
      true
    );
    this.couchService.createTaskDocument(bulkTask)
      .subscribe(
        (response: Response) => {
          if (response['ok'] === true) {
            bulkTask.id = response['id'];
            bulkTask.rev = response['rev'];
            this.addTask(bulkTask);
          }
        }
      );
  }

  public getLastId() {
    if (this.taskList.length > 0) {
      return Math.max.apply(Math, this.taskList.map((obj) => obj.id));
    }
    return 0;
  }

  public removeTask(id: string) {
    const index = this._taskList.findIndex(s => s.id === id);
    if (index !== -1) {
      this.couchService.deleteTaskDocument(this._taskList[index]).subscribe(
        (response: Response) => {
          if (response['ok'] === true) {
            console.log(this._taskList[index]);
            this._taskList.splice(index, 1);
            console.log(this._taskList);
            this.taskListChanged.next(this._taskList);
          }
        }
      );
    }
  }

  getTask(id: string) {
    return this._taskList.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  updateTask(task: Task) {
    const index = this._taskList.findIndex(s => s.id === task.id);
    if (index !== -1) {
      this.couchService.updateTaskDocument(task).subscribe(
        (response: Response) => {
          if (response['ok'] === true) {
            task.rev = response['rev'];
            this._taskList[index] = task;
            this.taskListChanged.next(this._taskList);
          }
        }
      );
    }
  }

  closeTask(id: string) {
    const task: Task = this.getTask(id);
    task.completed = 1;
    this.updateTask(task);
  }

  getOwnedTasks(): Task[] {
    return this._taskList.filter(obj => obj.owner === true);
  }

  get taskList(): Task[] {
    return this._taskList;
  }

  clearTaskList() {
    this._taskList = [];
  }



}
