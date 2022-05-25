import { TestBed } from '@angular/core/testing';

import { ServicosGetService } from './servicos-get.service';

describe('ServicosGetService', () => {
  let service: ServicosGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
