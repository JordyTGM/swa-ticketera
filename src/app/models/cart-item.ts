import { Event, Ticket } from './event';

export interface CartItem {
  event: Event;
  ticket: Ticket;
  quantity: number;
}

