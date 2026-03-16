import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Events } from './pages/events/events';
import { EventDetail } from './pages/event-detail/event-detail';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'eventos', component: Events },
  { path: 'eventos/:id', component: EventDetail },
  { path: 'carrito', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: '**', redirectTo: '' },
];

