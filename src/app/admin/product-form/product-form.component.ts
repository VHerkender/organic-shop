import { Component } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
//import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$;//: Observable<any[]>;
  product: {title: '', price: 0, imageUrl: '', category: '', id: ''}; // mosh has product = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    //if (id) this.productService.get(id).valueChanges().subscribe(p => this.product = p); //correct?
  }

  save(product) {
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm("sure?")) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

}
