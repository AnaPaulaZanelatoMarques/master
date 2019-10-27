import { TestBed } from '@angular/core/testing';

import { ServProdutosService } from './serv-produtos.service';

describe('ServProdutosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServProdutosService = TestBed.get(ServProdutosService);
    expect(service).toBeTruthy();
  });
});
