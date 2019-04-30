import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';

@Component({
  selector: 'app-reserv',
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css']
})
export class ReservComponent implements OnInit {

  constructor(public backupSrv: BackupServService) { }

  ngOnInit() {
  }

}
