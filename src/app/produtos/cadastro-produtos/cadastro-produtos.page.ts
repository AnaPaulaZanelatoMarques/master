import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/models/ProdutoModel';
import { ServProdutosService } from 'src/app/service/serv-produtos.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.page.html',
  styleUrls: ['./cadastro-produtos.page.scss'],
})
export class CadastroProdutosPage implements OnInit {

  model:ProdutoModel;
  constructor(private service:ServProdutosService, public alertController: AlertController, private nav:NavController) { 
    this.model = new ProdutoModel();
  }

 
    async mensagem(msg:string) {
      const alert = await this.alertController.create({
        header: 'Atenção',
        subHeader: 'Cadastro',
        message: msg,
        buttons: ['OK']
      });
  
      await alert.present();
    }
  

  ngOnInit() {
  }

  salvar(){
    if(this.model.descricao== undefined || this.model.qtde==undefined)
      this.mensagem("Informe os campos!");
      else{
        this.service.inserir(this.model).subscribe(
          res=>{
              this.nav.navigateBack("/home");
           // this.mensagem("Dados salvos com sucesso!");
          },
          err=>{
            this.mensagem("Erro ao inserir os dados!");
          }
        );
      }
  }


}
