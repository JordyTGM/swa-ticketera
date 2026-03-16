import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../../services/events';
import { Event } from '../../models/event';
import { MinPricePipe } from '../../pipes/min-price-pipe';

@Component({
  selector: 'app-events',
  imports: [RouterLink, CurrencyPipe, DatePipe, FormsModule, MinPricePipe],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events implements OnInit {
  private eventsService = inject(EventsService);
  private route = inject(ActivatedRoute);

  protected allEvents: Event[] = this.eventsService.getEvents();
  protected filteredEvents: Event[] = [...this.allEvents];
  protected categories: string[] = ['Todos', ...this.eventsService.getCategories()];
  protected selectedCategory = 'Todos';
  protected searchQuery = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['categoria']) {
        this.selectedCategory = params['categoria'];
        this.applyFilters();
      }
    });
  }

  protected selectCategory(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  protected applyFilters(): void {
    this.filteredEvents = this.allEvents.filter((event) => {
      const matchesCategory =
        this.selectedCategory === 'Todos' ||
        event.category === this.selectedCategory;
      const matchesSearch =
        !this.searchQuery ||
        event.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.city.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}

