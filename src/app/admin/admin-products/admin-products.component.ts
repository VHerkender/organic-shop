import { Component, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
//import { Product } from 'src/app/models/product';
//import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  products: any[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResorce: DataTableDirective;
  items: any[] = [];
  itemCount: number;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  columnsToDisplay = ["Title", "Price"];
  
  constructor(private productService: ProductService, private http: HttpClient) {
    this.subscription = this.productService.getAll()
    .subscribe(products => {
      this.filteredProducts = this.products = products;
      this.dtTrigger.next();
      // this.initializeTable(products);
    });
  }

  // private initializeTable(products: any[]) {
  //   this.tableResorce = new DataTableDirective();
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

  filter(query: string) {
    this.filteredProducts = (query) ?
    this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //"angular-4-data-table": "^0.4.6",
}


