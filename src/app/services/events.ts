import { Injectable } from '@angular/core';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private events: Event[] = [
    {
      id: 1,
      name: 'Bad Bunny - Most Wanted Tour',
      description:
        'El regreso más esperado del artista urbano más grande del mundo. Una noche llena de éxitos y sorpresas en un show de producción mundial.',
      date: '2026-04-15',
      time: '20:00',
      venue: 'Estadio Monumental',
      city: 'Buenos Aires',
      imageUrl: 'https://picsum.photos/seed/concert1/800/400',
      category: 'Concierto',
      featured: true,
      tickets: [
        { id: 101, type: 'Campo', price: 12000, available: 500 },
        { id: 102, type: 'Platea Baja', price: 18000, available: 200 },
        { id: 103, type: 'Platea Alta', price: 9000, available: 350 },
        { id: 104, type: 'VIP', price: 35000, available: 50 },
      ],
    },
    {
      id: 2,
      name: 'Coldplay - Music of the Spheres',
      description:
        'La banda británica vuelve con su espectacular show lleno de luces, colores y la mejor música de sus más de 25 años de carrera.',
      date: '2026-05-20',
      time: '21:00',
      venue: 'Estadio River Plate',
      city: 'Buenos Aires',
      imageUrl: 'https://picsum.photos/seed/concert2/800/400',
      category: 'Concierto',
      featured: true,
      tickets: [
        { id: 201, type: 'Campo General', price: 15000, available: 800 },
        { id: 202, type: 'Campo VIP', price: 28000, available: 150 },
        { id: 203, type: 'Tribuna', price: 8500, available: 600 },
        { id: 204, type: 'Palco', price: 50000, available: 30 },
      ],
    },
    {
      id: 3,
      name: 'La Feria del Teatro 2026',
      description:
        'El festival de teatro más importante de Latinoamérica. Más de 50 obras en cartelera durante todo el mes de junio.',
      date: '2026-06-01',
      time: '18:00',
      venue: 'Centro Cultural San Martín',
      city: 'Buenos Aires',
      imageUrl: 'https://picsum.photos/seed/teatro1/800/400',
      category: 'Teatro',
      featured: false,
      tickets: [
        { id: 301, type: 'General', price: 4500, available: 300 },
        { id: 302, type: 'Preferencial', price: 7000, available: 100 },
      ],
    },
    {
      id: 4,
      name: 'Movistar Arena - Noche de Boxeo',
      description:
        'Gran velada de boxeo con peleas de campeonatos nacionales e internacionales. Una noche de emociones y adrenalina.',
      date: '2026-04-28',
      time: '19:30',
      venue: 'Movistar Arena',
      city: 'Buenos Aires',
      imageUrl: 'https://picsum.photos/seed/boxing1/800/400',
      category: 'Deporte',
      featured: true,
      tickets: [
        { id: 401, type: 'General', price: 6000, available: 400 },
        { id: 402, type: 'Ringside', price: 25000, available: 80 },
        { id: 403, type: 'Premium', price: 15000, available: 120 },
      ],
    },
    {
      id: 5,
      name: 'Circo del Sol - Alegría',
      description:
        'El espectáculo más icónico del Cirque du Soleil regresa con una versión renovada. Acrobacias, música y magia en un show sin igual.',
      date: '2026-05-10',
      time: '20:30',
      venue: 'Estadio Vélez',
      city: 'Buenos Aires',
      imageUrl: 'https://picsum.photos/seed/circus1/800/400',
      category: 'Espectáculo',
      featured: false,
      tickets: [
        { id: 501, type: 'Platea', price: 11000, available: 250 },
        { id: 502, type: 'Palco Lateral', price: 16000, available: 90 },
        { id: 503, type: 'Palco Central', price: 22000, available: 60 },
      ],
    },
    {
      id: 6,
      name: 'Comedy Night - Stand Up',
      description:
        'Una noche de risas garantizadas con los mejores comediantes del país. Show de stand-up comedy para toda la familia.',
      date: '2026-04-22',
      time: '21:00',
      venue: 'Teatro Gran Rex',
      city: 'Buenos Aires',
      imageUrl: 'https://picsum.photos/seed/comedy1/800/400',
      category: 'Comedia',
      featured: false,
      tickets: [
        { id: 601, type: 'Platea Baja', price: 5500, available: 180 },
        { id: 602, type: 'Platea Alta', price: 3500, available: 220 },
        { id: 603, type: 'Palco', price: 8000, available: 40 },
      ],
    },
  ];

  getEvents(): Event[] {
    return this.events;
  }

  getFeaturedEvents(): Event[] {
    return this.events.filter((e) => e.featured);
  }

  getEventById(id: number): Event | undefined {
    return this.events.find((e) => e.id === id);
  }

  getEventsByCategory(category: string): Event[] {
    return this.events.filter((e) => e.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.events.map((e) => e.category))];
  }
}

