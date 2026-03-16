import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from '../models/event';

@Pipe({
  name: 'minPrice',
})
export class MinPricePipe implements PipeTransform {
  transform(tickets: Ticket[]): number {
    if (!tickets || tickets.length === 0) return 0;
    return Math.min(...tickets.map((t) => t.price));
  }
}

