import { Component, OnInit, ViewChild } from '@angular/core';
import { BackupServService } from '../backup-serv.service';
import { MatDialog, MatTabGroup } from '@angular/material';
import { ModalBackupComponent } from '../modal-backup/modal-backup.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css']
})
export class ReservComponent implements OnInit {

  constructor(public backupSrv: BackupServService, private dialog: MatDialog) { }
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;
  subscription: Subscription;
  ngOnInit() {
    this.subscription = this.backupSrv.fixBar$.subscribe(res => {
      this.tabGroup.realignInkBar();
    });
  }

  openModalBackup() {
    this.dialog.open(ModalBackupComponent);
  }

}
