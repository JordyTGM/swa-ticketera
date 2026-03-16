import { MinPricePipe } from './min-price-pipe';
import { Ticket } from '../models/event';

describe('MinPricePipe', () => {
  let pipe: MinPricePipe;

  beforeEach(() => {
    pipe = new MinPricePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the minimum price from an array of tickets', () => {
    const tickets: Ticket[] = [
      { id: 1, type: 'General', price: 5000, available: 100 },
      { id: 2, type: 'VIP', price: 15000, available: 50 },
      { id: 3, type: 'Platea', price: 8000, available: 200 },
    ];
    expect(pipe.transform(tickets)).toBe(5000);
  });

  it('should return 0 for an empty array', () => {
    expect(pipe.transform([])).toBe(0);
  });

  it('should handle a single ticket', () => {
    const tickets: Ticket[] = [{ id: 1, type: 'General', price: 3000, available: 100 }];
    expect(pipe.transform(tickets)).toBe(3000);
  });
});

