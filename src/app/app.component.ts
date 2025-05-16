import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { Product } from '../types';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SidebarComponent,
    CardComponent,
    FooterComponent,
  ],
  providers: [ProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private productService: ProductService) {}
  products = signal<Product[]>([])

  ngOnInit() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products.set(res.data)
    })
  }
}
