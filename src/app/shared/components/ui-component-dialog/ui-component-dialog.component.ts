import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

/**
 * @title Dialog elements
 */
@Component({
  selector: 'app-ui-component-dialog',
  templateUrl: './ui-component-dialog.component.html',
  styleUrls: ['./ui-component-dialog.component.scss']
})
export class DialogElements implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogElements>) {}

  ngOnInit() {

  }
  closeDialog() {
    this.dialogRef.close();
  }


}


