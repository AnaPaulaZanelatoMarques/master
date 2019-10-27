import { ServProdutosService } from 'src/app/service/serv-produtos.service';
import { ProdutoModel } from 'src/app/models/ProdutoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  prod:ProdutoModel;
  id:number;
  constructor(private ativeRouter: ActivatedRoute, private service: ServProdutosService) { 

   this.id  = Number.parseInt( ativeRouter.snapshot.paramMap.get("id"));
    this.service.getProduto(this.id).subscribe(
      res=>{
        console.log(res);
        this.prod = res as ProdutoModel;
      }
    );

  }

  ngOnInit() {
  }

}
