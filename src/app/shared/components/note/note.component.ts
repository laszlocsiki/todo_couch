import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../model/task.model";
import {ListService} from "../../services/list.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() task: Task;
  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  closeTask() {
    this.listService.closeTask(this.task.id);
  }
}
