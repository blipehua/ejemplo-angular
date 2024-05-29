import { TestBed } from '@angular/core/testing';

import { EjemploAngularService } from './ejemplo-angular.service';

describe('EjemploAngularService', () => {
  let service: EjemploAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjemploAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
