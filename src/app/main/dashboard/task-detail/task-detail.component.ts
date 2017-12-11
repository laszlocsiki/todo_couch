import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ListService} from '../../../shared/services/list.service';
import {Task} from '../../../shared/model/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  public taskid: string;
  public task: Task;
  public isEdit = false;
  description: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private listService: ListService,
              private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskid = params['id'];
        this.task = this.listService.getTask(this.taskid);
        this.description = this.task.description;
      }
    );
  }

  ngOnChanges() {
    this.cdRef.detectChanges();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  edit() {
    this.isEdit = true;
  }

  save() {
    this.task.description = this.description;
    this.listService.updateTask(this.task);
    this.isEdit = false;
  }

  delete() {
    this.listService.removeTask(this.task.id);
  }

}
