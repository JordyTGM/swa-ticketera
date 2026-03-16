import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { EventsService } from '../../services/events';
import { Event } from '../../models/event';
import { MinPricePipe } from '../../pipes/min-price-pipe';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe, DatePipe, MinPricePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private eventsService = inject(EventsService);
  protected featuredEvents: Event[] = this.eventsService.getFeaturedEvents();
  protected categories: string[] = this.eventsService.getCategories();
}


