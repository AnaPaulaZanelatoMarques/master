import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProdutoModel } from '../models/ProdutoModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServProdutosService {

  url:string= "http://localhost:52845/api/Produto";

  constructor(private http:HttpClient) { }

  getAllProdutos():Observable<ProdutoModel[]>{
    return this.http.get<ProdutoModel[]>(this.url);
  };

  getProduto(id:number):Observable<ProdutoModel>{
    const urln:string = this.url + '/' + id.toString();
    console.log(urln);
    return this.http.get<ProdutoModel>(urln);
  };
  inserir(model:ProdutoModel):Observable<ProdutoModel>{
    return this.http.post<ProdutoModel>(this.url, model);
  };
}
