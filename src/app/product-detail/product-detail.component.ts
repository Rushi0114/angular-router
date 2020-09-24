import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import{ Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';

import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private service:ProductService

  ) { }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.service.getProduct(params.get('id')))
    );
  }

  gotoProducts(product:Product){
    const productId =product? product.id:null;
    this.router.navigate(['/superproducts',{id:productId, foo:'foo'}]);
  }

}
