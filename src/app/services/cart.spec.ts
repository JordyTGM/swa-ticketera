import { TestBed } from '@angular/core/testing';

import { CartService } from './cart';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty cart', () => {
    expect(service.cartItems().length).toBe(0);
    expect(service.totalItems()).toBe(0);
    expect(service.totalPrice()).toBe(0);
  });

  it('should add item to cart', () => {
    const mockEvent = { id: 1, name: 'Test Event', description: '', date: '2026-01-01', time: '20:00', venue: 'Test', city: 'BA', imageUrl: '', category: 'Test', featured: false, tickets: [] };
    const mockTicket = { id: 101, type: 'General', price: 1000, available: 100 };
    service.addToCart(mockEvent, mockTicket, 2);
    expect(service.cartItems().length).toBe(1);
    expect(service.totalItems()).toBe(2);
    expect(service.totalPrice()).toBe(2000);
  });

  it('should remove item from cart', () => {
    const mockEvent = { id: 1, name: 'Test Event', description: '', date: '2026-01-01', time: '20:00', venue: 'Test', city: 'BA', imageUrl: '', category: 'Test', featured: false, tickets: [] };
    const mockTicket = { id: 101, type: 'General', price: 1000, available: 100 };
    service.addToCart(mockEvent, mockTicket, 1);
    service.removeFromCart(101, 1);
    expect(service.cartItems().length).toBe(0);
  });

  it('should update quantity of an existing cart item', () => {
    const mockEvent = { id: 1, name: 'Test Event', description: '', date: '2026-01-01', time: '20:00', venue: 'Test', city: 'BA', imageUrl: '', category: 'Test', featured: false, tickets: [] };
    const mockTicket = { id: 101, type: 'General', price: 1000, available: 100 };
    service.addToCart(mockEvent, mockTicket, 2);
    service.updateQuantity(101, 1, 5);
    expect(service.cartItems()[0].quantity).toBe(5);
    expect(service.totalItems()).toBe(5);
  });

  it('should remove item when updateQuantity is called with 0', () => {
    const mockEvent = { id: 1, name: 'Test Event', description: '', date: '2026-01-01', time: '20:00', venue: 'Test', city: 'BA', imageUrl: '', category: 'Test', featured: false, tickets: [] };
    const mockTicket = { id: 101, type: 'General', price: 1000, available: 100 };
    service.addToCart(mockEvent, mockTicket, 2);
    service.updateQuantity(101, 1, 0);
    expect(service.cartItems().length).toBe(0);
  });

  it('should clear the cart', () => {
    const mockEvent = { id: 1, name: 'Test Event', description: '', date: '2026-01-01', time: '20:00', venue: 'Test', city: 'BA', imageUrl: '', category: 'Test', featured: false, tickets: [] };
    const mockTicket = { id: 101, type: 'General', price: 1000, available: 100 };
    service.addToCart(mockEvent, mockTicket, 3);
    service.clearCart();
    expect(service.cartItems().length).toBe(0);
  });
});
