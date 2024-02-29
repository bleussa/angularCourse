import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-confirmDeleteDialog',
  templateUrl: './confirmDeleteDialog.component.html',
})
export class ConfirmDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef : MatDialogRef<ConfirmDeleteDialogComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data : Hero
  ){}

  ngOnInit() {
  }

  onNoClick() : void{
    this.dialogRef.close(false);
  }

  onConfirm() : void{
    this.dialogRef.close(true);
  }

}
