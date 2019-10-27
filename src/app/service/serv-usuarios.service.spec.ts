import { TestBed } from '@angular/core/testing';

import { ServUsuariosService } from './serv-usuarios.service';

describe('ServUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServUsuariosService = TestBed.get(ServUsuariosService);
    expect(service).toBeTruthy();
  });
});
