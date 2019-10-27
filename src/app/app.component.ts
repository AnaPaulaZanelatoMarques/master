import { Component } from '@angular/core';

import { Platform, NavController, AlertController, Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuarioModel } from './models/UsuarioModel';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  usuario:UsuarioModel;
  
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Cadastro',
      url: '/cadastro-produtos',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav:NavController, public alertController: AlertController,
    public events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.events.subscribe('user:created', (user, time) => {
        // user and time are the same arguments passed in `events.publish(user, time)`
       
        console.log('Welcome', user, 'at', time);
      });

     
      if(this.usuario==undefined)
          this.nav.navigateBack('login');

    });
  }

  
  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Deseja sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim',
          handler: () => {
            localStorage.removeItem('usuario');
            localStorage.clear();
            location.reload();
            this.nav.navigateBack('login');
          }
        }
      ]
    });

    await alert.present();
  }

  sair():any{
    this.presentAlertConfirm();
   
  }
}
