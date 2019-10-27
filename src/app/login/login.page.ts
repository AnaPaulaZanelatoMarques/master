import { ServUsuariosService } from './../service/serv-usuarios.service';
import { UsuarioModel } from './../models/UsuarioModel';
import { Component, OnInit } from '@angular/core';
import * as tslib_1 from "tslib";




import { AlertController, NavController, MenuController, Events, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:UsuarioModel;
  login:string;
  senha:string;
  loading:boolean;
 
  constructor(public loadingCrtl: LoadingController, public events: Events, private service:ServUsuariosService, private alertController: AlertController, private nav:NavController, private menu: MenuController) {
    
   }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.menu.enable(false);
    this.login="";
    this.senha="";
  }


  async exibirmensagem(mensagem:string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      subHeader: 'Login',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
}

async exibirLoading(){
  this.loading = true
  return await this.loadingCrtl.create({
    message: 'Carregando dados...'
  }).then(a =>{
    a.present().then(() =>{
      if(!this.loading){
        a.dismiss().then(() => {});
      }
    });
  });
}

async fecharLoding(){
  this.loading = false;
  return await this.loadingCrtl.dismiss().then(() => {});
}




  logar(){
    this.exibirLoading();
    this.service.logar(this.login, this.senha).subscribe(
      res=>{
        this.fecharLoding();
          this.usuario = res as UsuarioModel;
          if(this.usuario.logado){
          
            localStorage.setItem("usuario", JSON.stringify( this.usuario));
            this.events.publish('user:created', this.usuario, Date.now());
            this.nav.navigateBack('home');
          }
          else{
          
           this.exibirmensagem("Dados inválidos!");
        }
      
      }
    );
  }
}
