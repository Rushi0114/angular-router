import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import{ PRODUCTS} from './mock-products';
import{ Product} from './product';
import {MessageService} from './message.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts():Observable<Product[]> {
    this.messageService.add('ProductService:fetched products');
    return of(PRODUCTS);
  }

  getProduct(id:number | string){
    return this.getProducts().pipe(
      map((products:Product[])=>products.find(product =>product.id === +id))
    );
  }


}
