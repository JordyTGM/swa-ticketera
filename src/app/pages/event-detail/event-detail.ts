import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../../services/events';
import { CartService } from '../../services/cart';
import { Event, Ticket } from '../../models/event';

@Component({
  selector: 'app-event-detail',
  imports: [RouterLink, CurrencyPipe, DatePipe, FormsModule],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.scss',
})
export class EventDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private eventsService = inject(EventsService);
  private cartService = inject(CartService);

  protected event: Event | undefined;
  protected selectedTicket: Ticket | undefined;
  protected quantity = 1;
  protected addedToCart = signal(false);
  protected notFound = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventsService.getEventById(id);
    if (!this.event) {
      this.notFound = true;
      return;
    }
    this.selectedTicket = this.event.tickets[0];
  }

  protected selectTicket(ticket: Ticket): void {
    this.selectedTicket = ticket;
    this.quantity = 1;
  }

  protected increaseQty(): void {
    if (this.selectedTicket && this.quantity < Math.min(this.selectedTicket.available, 10)) {
      this.quantity++;
    }
  }

  protected decreaseQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  protected addToCart(): void {
    if (!this.event || !this.selectedTicket) return;
    this.cartService.addToCart(this.event, this.selectedTicket, this.quantity);
    this.addedToCart.set(true);
    setTimeout(() => this.addedToCart.set(false), 2500);
  }

  protected buyNow(): void {
    if (!this.event || !this.selectedTicket) return;
    this.cartService.addToCart(this.event, this.selectedTicket, this.quantity);
    this.router.navigate(['/carrito']);
  }

  protected get totalPrice(): number {
    return (this.selectedTicket?.price ?? 0) * this.quantity;
  }
}

