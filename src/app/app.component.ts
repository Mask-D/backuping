import { Component } from '@angular/core';
import { BackupServService } from './backup-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backuping';
  constructor(public backupSrv: BackupServService) { }
}
