import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';

interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
}

@Component({
  selector: 'app-checkout',
  imports: [RouterLink, CurrencyPipe, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss',
})
export class Checkout {
  private cartService = inject(CartService);
  private router = inject(Router);

  protected cartItems = this.cartService.cartItems;
  protected totalPrice = this.cartService.totalPrice;
  protected orderPlaced = signal(false);
  protected orderNumber = signal('');
  protected isProcessing = signal(false);

  protected form: CheckoutForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  };

  protected submitOrder(): void {
    if (this.cartItems().length === 0) return;
    this.isProcessing.set(true);
    // Simulate payment processing
    setTimeout(() => {
      this.orderNumber.set(`TKT-${Date.now().toString().slice(-8)}`);
      this.cartService.clearCart();
      this.orderPlaced.set(true);
      this.isProcessing.set(false);
    }, 1500);
  }

  protected formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '').substring(0, 16);
    value = value.replace(/(.{4})/g, '$1 ').trim();
    this.form.cardNumber = value;
  }

  protected formatExpiry(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '').substring(0, 4);
    if (value.length >= 3) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    this.form.cardExpiry = value;
  }
}

