import { TestBed } from '@angular/core/testing';

import { EventsService } from './events';

describe('EventsService', () => {
  let service: EventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all events', () => {
    const events = service.getEvents();
    expect(events.length).toBeGreaterThan(0);
  });

  it('should return featured events', () => {
    const featured = service.getFeaturedEvents();
    expect(featured.every(e => e.featured)).toBe(true);
  });

  it('should find event by id', () => {
    const event = service.getEventById(1);
    expect(event).toBeDefined();
    expect(event?.id).toBe(1);
  });

  it('should return undefined for non-existent event id', () => {
    const event = service.getEventById(9999);
    expect(event).toBeUndefined();
  });

  it('should filter events by category', () => {
    const concerts = service.getEventsByCategory('Concierto');
    expect(concerts.length).toBeGreaterThan(0);
    expect(concerts.every(e => e.category === 'Concierto')).toBe(true);
  });

  it('should return empty array for unknown category', () => {
    const events = service.getEventsByCategory('UnknownCategory');
    expect(events.length).toBe(0);
  });

  it('should return categories', () => {
    const categories = service.getCategories();
    expect(categories.length).toBeGreaterThan(0);
  });
});
