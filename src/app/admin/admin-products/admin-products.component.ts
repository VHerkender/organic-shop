import { Component, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';
//import { Product } from 'src/app/models/product';
//import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {//implements OnDestroy{
  // products: any[];
  // filteredProducts: any[];
  // subscription: Subscription;
  // //tableResorce: DataTableResource<any>;
  // items: any[] = [];
  // itemCount: number;
  
  // constructor(private productService: ProductService) {
  //   this.subscription = this.productService.getAll()
  //   .subscribe(products => {
  //     this.filteredProducts = this.products = products;
  //     this.initializeTable(products);
  //   });
  // }

  // private initializeTable(products: any[]) {
  //   this.tableResorce = new DataTableResource(products);
  //     this.tableResorce.query({ offset: 0})
  //     .then(items => this.items = items);
  //     this.tableResorce.count()
  //     .then(count => this.itemCount = count);
  // }

  // reloadItems(params) {
  //   if (!this.tableResorce) return;
  //   this.tableResorce.query({ offset: 0})
  //   .then(items => this.items = items);
  // }

  // filter(query: string) {
  //   this.filteredProducts = (query) ?
  //   this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  //"angular-4-data-table": "^0.4.6",
}
