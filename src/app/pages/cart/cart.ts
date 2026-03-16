import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe, SlicePipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  protected cartService = inject(CartService);

  protected removeItem(ticketId: number, eventId: number): void {
    this.cartService.removeFromCart(ticketId, eventId);
  }

  protected updateQuantity(ticketId: number, eventId: number, quantity: number): void {
    this.cartService.updateQuantity(ticketId, eventId, quantity);
  }

  protected clearCart(): void {
    this.cartService.clearCart();
  }
}

