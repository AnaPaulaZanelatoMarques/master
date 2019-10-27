import { UsuarioModel } from './../models/UsuarioModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServUsuariosService {

  url:string = "http://localhost:52845/usuario/";
  constructor(private http:HttpClient) { }

  logar(login:string, senha:string):Observable<UsuarioModel>{
     const urlnew:string = `${this.url}/logar?login=${login}&senha=${senha}`;
      return this.http.get<UsuarioModel>(urlnew);
  };
}
