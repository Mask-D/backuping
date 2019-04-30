import { TestBed } from '@angular/core/testing';

import { BackupServService } from './backup-serv.service';

describe('BackupServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackupServService = TestBed.get(BackupServService);
    expect(service).toBeTruthy();
  });
});
