import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model'
import {StoreService} from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit{
  activado=false;
  counter=0;
  listaCard:Product[]=[];

  constructor(
    private storeService:StoreService
  ){
  }
  ngOnInit(){
    this.storeService.myCard$.subscribe(pro=>{
      this.counter=pro.length;
    });
  }
  activarMenu(){
    this.activado=!this.activado;
  }
}
