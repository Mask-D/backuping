import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-backup',
  templateUrl: './modal-backup.component.html',
  styleUrls: ['./modal-backup.component.css']
})
export class ModalBackupComponent implements OnInit {

  constructor(private dialog: MatDialog,
    public dialogRef: MatDialogRef <ModalBackupComponent>) { }

  ngOnInit() {
  }

}
