import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';

@Component({
  selector: 'app-raspisanie',
  templateUrl: './raspisanie.component.html',
  styleUrls: ['./raspisanie.component.css']
})
export class RaspisanieComponent implements OnInit {

  constructor(public backupSrv: BackupServService) { }

  ngOnInit() {
  }

}
