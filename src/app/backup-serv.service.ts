import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackupServService {

  show_reserv = false;
  show_schedule = false;
  show_restore = false;

  constructor() { }


  openReserv() {
    this.show_reserv = true;
    this.show_schedule = false;
    this.show_restore = false;
  }
  openSchedule() {
    this.show_reserv = false;
    this.show_schedule = true;
    this.show_restore = false;
  }
  openRestore() {
    this.show_reserv = false;
    this.show_schedule = false;
    this.show_restore = true;
  }

}
