import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';
import { MatDialog } from '@angular/material';
import { ModalBackupComponent } from '../modal-backup/modal-backup.component';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css']
})
export class ReservComponent implements OnInit {

  constructor(public backupSrv: BackupServService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openModalBackup() {
    this.dialog.open(ModalBackupComponent);
  }

}
