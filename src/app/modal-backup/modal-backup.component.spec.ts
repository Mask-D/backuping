import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBackupComponent } from './modal-backup.component';

describe('ModalBackupComponent', () => {
  let component: ModalBackupComponent;
  let fixture: ComponentFixture<ModalBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
