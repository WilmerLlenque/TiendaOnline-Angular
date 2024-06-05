import { Injectable } from '@angular/core';
import {Product} from '../models/product.model'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  listaCard:Product[]=[];
  private myCard=new BehaviorSubject<Product[]>([]);
  myCard$=this.myCard.asObservable();
  myListaCard(){
  return this.listaCard;
  }
  addListaCard(p:Product){
    this.listaCard.push(p);
    this.myCard.next(this.listaCard);
  }
}
