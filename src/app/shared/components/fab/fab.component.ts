import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewtodoDialogComponent} from '../dialogs/newtodo-dialog/newtodo-dialog.component';
import {ListService} from "../../services/list.service";

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css']
})
export class FabComponent implements OnInit {
  title: string;

  constructor(public dialog: MatDialog, private listService: ListService) { }

  openDialog() {
    console.log('click');
    const dialogRef = this.dialog.open(NewtodoDialogComponent, {
      width: '250px',
      data : {title: this.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result != null) {
        this.listService.addTaskByTitle(result);
      }
    });
  }

  ngOnInit() {
  }

}
