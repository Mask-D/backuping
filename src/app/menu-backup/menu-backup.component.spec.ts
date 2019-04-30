import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBackupComponent } from './menu-backup.component';

describe('MenuBackupComponent', () => {
  let component: MenuBackupComponent;
  let fixture: ComponentFixture<MenuBackupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBackupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
