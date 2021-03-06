import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBackupComponent } from './menu-backup/menu-backup.component';
import 'hammerjs';
import {
  MatButtonModule,
  MatDialogModule,
  MatGridListModule, MatInputModule,
  MatProgressSpinnerModule, MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatAutocompleteModule,
  MatIconModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatListModule,
  MatTabsModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { ReservComponent } from './reserv/reserv.component';
import { RaspisanieComponent } from './raspisanie/raspisanie.component';
import { RestoreComponent } from './restore/restore.component';
import { BackupServService } from './backup-serv.service';
import { ModalBackupComponent } from './modal-backup/modal-backup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    MenuBackupComponent,
    ReservComponent,
    RaspisanieComponent,
    RestoreComponent,
    ModalBackupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatAutocompleteModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [BackupServService],
  entryComponents: [ModalBackupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
