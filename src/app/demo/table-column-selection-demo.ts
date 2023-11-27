import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'table-column-selection-demo',
  templateUrl: 'table-column-selection-demo.html',
  providers: [MessageService],
})
export class TableColumnSelectionDemo implements OnInit {
  products!: Product[];

  selectedProduct!: Product;

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

  editObdelava(product: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Urejanje obdelave',
      detail: product.name,
    });
  }

  showDocuments(product: Product) {
    this.messageService.add({
      severity: 'info',
      summary: 'Kreirani dokumenti',
      detail: product.name,
    });
  }
}
