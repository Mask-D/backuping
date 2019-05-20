import { Component, OnInit } from '@angular/core';
import { BackupServService } from '../backup-serv.service';
import { DateAdapter } from '@angular/material';

@Component({
  selector: 'app-raspisanie',
  templateUrl: './raspisanie.component.html',
  styleUrls: ['./raspisanie.component.css']
})
export class RaspisanieComponent implements OnInit {

  when = {
    day: false,
    week: false,
    month: false,
    year: false,
  };
  hours = [];
  minutes = [];
  days = [];

  week = {
    monday: 'понедельник',
    tuesday: 'вторник',
    wednesday: 'среда',
    thursday: 'четверг',
    friday: 'пятница',
    saturday: 'суббота',
    sunday: 'воскресенье'
  };
  constructor(public backupSrv: BackupServService, private adapter: DateAdapter<any>) { }

  ngOnInit() {
    this.adapter.setLocale('ru');
    for (let i = 0; i < 24; i++) {
      this.hours[i] = i;
    }
    for (let i = 0; i < 60; i++) {
      this.minutes[i] = i;
    }
    for (let i = 0; i < 29; i++) {
      this.days[i] = i;
    }
  }

  chooseWhen(val) {
    if (val === '1') {
      this.when.day = true;
      this.when.week = false;
      this.when.month = false;
      this.when.year = false;
    } else if (val === '2') {
      this.when.week = true;
      this.when.month = false;
      this.when.year = false;
      this.when.day = false;
    } else if (val === '3') {
      this.when.month = true;
      this.when.day = false;
      this.when.week = false;
      this.when.year = false;
    } else if (val === '4') {
      this.when.year = true;
      this.when.day = false;
      this.when.week = false;
      this.when.month = false;
    }
  }

}
