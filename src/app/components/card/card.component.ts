import { Component, Input } from '@angular/core';
import { Product } from '../../../types';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) product!: Product
}
