import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';

@Component({
  selector: 'app-menu-backup',
  templateUrl: './menu-backup.component.html',
  styleUrls: ['./menu-backup.component.css']
})
export class MenuBackupComponent implements OnInit {
  rezerv_button = true;
  schedule_button = true;
  restore_button = true;
  constructor(public backupSrv: BackupServService) { }

  ngOnInit() {
  }

  transfer(ev) {
    const a = document.getElementById('menu-back').style;
    const a1 = document.getElementById('menu-back1').style;
    const b_rz = document.getElementById('menu-button-rezerv').style;
    const b_sc = document.getElementById('menu-button-schedule').style;
    const b_re = document.getElementById('menu-button-restore').style;


    if (ev) {
          a.transition = 'all .8s ease';
          a1.transition = 'all .8s ease';
          a.width = 100 + 'px';
          a1.width = 100 + 'px';
          b_rz.transition = 'all .8s ease';
          b_sc.transition = 'all .8s ease';
          b_re.transition = 'all .8s ease';
          b_rz.minWidth = 40 + 'px';
          b_sc.minWidth = 40 + 'px';
          b_re.minWidth = 40 + 'px';
          this.rezerv_button = false;
          this.schedule_button = false;
          this.restore_button = false;
  } else {
    a.transition = 'all .8s ease';
    a1.transition = 'all .8s ease';
    a.width = 325 + 'px';
    a1.width = 325 + 'px';
    b_rz.transition = 'all .8s ease';
    b_sc.transition = 'all .8s ease';
    b_re.transition = 'all .8s ease';
    b_rz.minWidth = 250 + 'px';
    b_sc.minWidth = 250 + 'px';
    b_re.minWidth = 250 + 'px';
    this.backupSrv.fixBar(1);
    setTimeout(() => {
      this.rezerv_button = true;
    this.schedule_button = true;
    this.restore_button = true;
    }, 500);
  }
  setTimeout(() => {
    this.backupSrv.fixBar(1);
  }, 700);
}
}
