import { UsuarioModel } from './UsuarioModel';

export class LoginModel{
    usuario:UsuarioModel;

    public getLogin():UsuarioModel{
        this.usuario = JSON.parse(localStorage.getItem('usuario'));
        if(this.usuario==undefined)
          this.usuario = null;
          return this.usuario;
    }


public login(usu:UsuarioModel):any{
    localStorage.setItem("usuario", JSON.stringify( usu));
    this.usuario = usu;
}

public estaLogado():boolean{
    this.usuario = this.getLogin();
    if(this.usuario==null)
     return false;
     else
     return true;
}

public logout():any{
    this.usuario = null;
    localStorage.removeItem('usuario');
    localStorage.clear();
    location.reload();
}

}