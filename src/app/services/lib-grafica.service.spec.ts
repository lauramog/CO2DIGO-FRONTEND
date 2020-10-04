import { TestBed } from '@angular/core/testing';

import { LibGraficaService } from './lib-grafica.service';

describe('LibGraficaService', () => {
  let service: LibGraficaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibGraficaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
