import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-newtodo-dialog',
  templateUrl: './newtodo-dialog.component.html',
  styleUrls: ['./newtodo-dialog.component.css']
})
export class NewtodoDialogComponent {
  title: string;
  constructor(
    public dialogRef: MatDialogRef<NewtodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
