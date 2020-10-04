import { TestBed } from '@angular/core/testing';

import { BackendGraficosService } from './backend-graficos.service';

describe('BackendGraficosService', () => {
  let service: BackendGraficosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendGraficosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
