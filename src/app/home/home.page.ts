import { UsuarioModel } from './../models/UsuarioModel';
import { ServProdutosService } from './../service/serv-produtos.service';
import { Component } from '@angular/core';
import { ProdutoModel } from '../models/ProdutoModel';
import { NavController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  lista:ProdutoModel[];
  usuario:UsuarioModel;


  constructor(private service:ServProdutosService, private menu: MenuController,private router:Router, private nav:NavController, public alertController: AlertController) {
    this.getAllProdutos();
    this.menu.enable(true);
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    if(this.usuario==undefined)
        this.nav.navigateBack('login');
      
  }



  getAllProdutos():any{
    this.service.getAllProdutos().subscribe(res=>{
      this.lista = res as ProdutoModel[];
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

  detalhes(prod:ProdutoModel):any{
    console.log('/detalhes/' + prod.codigo);
    this.router.navigateByUrl('/detalhes/' + prod.codigo) ;

  }

}
