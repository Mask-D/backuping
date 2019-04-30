import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';

@Component({
  selector: 'app-menu-backup',
  templateUrl: './menu-backup.component.html',
  styleUrls: ['./menu-backup.component.css']
})
export class MenuBackupComponent implements OnInit {

  constructor(public backupSrv: BackupServService) { }

  ngOnInit() {
  }

}
