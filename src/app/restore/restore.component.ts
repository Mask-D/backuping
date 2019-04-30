import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {

  constructor(public backupSrv: BackupServService) { }

  ngOnInit() {
  }

}
