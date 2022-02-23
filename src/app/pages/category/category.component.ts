import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null
  products: Product[] = []
  limit:number = 10
  offset:number = 0

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id')
      if (this.categoryId) {
        this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        .subscribe(data => {
          this.products = data
        })
      }
    })
  }

  onLoadMore() {
    if (this.categoryId) {
      this.productsService.getByCategory(this.categoryId,this.limit, this.offset).subscribe((data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
    }
  }

}
