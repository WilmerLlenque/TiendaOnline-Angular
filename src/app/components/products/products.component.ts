import { Component} from '@angular/core';
import { Product} from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  myListaCard:Product[]=[];
  countCarrito=0;
  product: Product[]=[
    {
      id:'1',
      title: 'camara',
      price: 12,
      image: './assets/img/camara.jpg',
      description:'camara',
      category:'Gadgets',
    },
    {
      id:'2',
      title: 'camara2',
      price: 12,
      image: './assets/img/camara2.jpg',
      description:'camara2',
      category:'Gadgets',
    },
    {
      id:'3',
      title: 'Dron',
      price: 12,
      image: './assets/img/Dron.jpg',
      description:'Dron1',
      category:'Gadgets',
    },
    {
      id:'4',
      title: 'Dron2',
      price: 12,
      image: './assets/img/Dron2.jpg',
      description:'Dron2',
      category:'Gadgets',
    },
    {
      id:'5',
      title: 'Telefono inteligente',
      price: 12,
      image: './assets/img/Ifhone.jpg',
      description:'Telefono inteligente',
      category:'Gadgets',
    },
    {
      id:'6',
      title: 'Telefono inteligente2',
      price: 12,
      image: './assets/img/Telefono.jpg',
      description:'Telefono inteligente2',
      category:'Gadgets',
    },
    {
      id:'7',
      title: 'Laptop',
      price: 12,
      image: './assets/img/Laptop.jpg',
      description:'Laptop',
      category:'Gadgets',
    },
    {
      id:'8',
      title: 'teclado',
      price: 12,
      image: './assets/img/teclado.jpg',
      description:'teclado',
      category:'Gadgets',
    }
  ]
  listaCard(lista:Product[]){
    this.myListaCard=lista;
    this.countCarrito++;
  }
}
