import { Component,Input,Output,EventEmitter} from '@angular/core';
import {Product} from '../../models/product.model'
import {StoreService} from '../../services/store.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Output() em=new EventEmitter<Product[]>();
listaCard:Product[]=[];
@Input() product:Product={
    id:'',
    title: '',
    price: 12,
    image: '',
    description:'',
    category:'',
}
constructor(
  private storeService:StoreService
){
  this.listaCard=storeService.myListaCard();
}
addProduct(){
  this.storeService.addListaCard(this.product);
  this.em.emit(this.listaCard);
  console.log(this.listaCard);
}
}
