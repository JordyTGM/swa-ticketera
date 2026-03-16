import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Event, Ticket } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();

  readonly totalItems = computed(() =>
    this.items().reduce((sum, item) => sum + item.quantity, 0)
  );

  readonly totalPrice = computed(() =>
    this.items().reduce(
      (sum, item) => sum + item.ticket.price * item.quantity,
      0
    )
  );

  addToCart(event: Event, ticket: Ticket, quantity: number): void {
    const existing = this.items().find(
      (item) => item.ticket.id === ticket.id && item.event.id === event.id
    );

    if (existing) {
      this.items.update((items) =>
        items.map((item) =>
          item.ticket.id === ticket.id && item.event.id === event.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      this.items.update((items) => [...items, { event, ticket, quantity }]);
    }
  }

  removeFromCart(ticketId: number, eventId: number): void {
    this.items.update((items) =>
      items.filter(
        (item) => !(item.ticket.id === ticketId && item.event.id === eventId)
      )
    );
  }

  updateQuantity(ticketId: number, eventId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(ticketId, eventId);
      return;
    }
    this.items.update((items) =>
      items.map((item) =>
        item.ticket.id === ticketId && item.event.id === eventId
          ? { ...item, quantity }
          : item
      )
    );
  }

  clearCart(): void {
    this.items.set([]);
  }
}

