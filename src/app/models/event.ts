export interface Ticket {
  id: number;
  type: string;
  price: number;
  available: number;
}

export interface Event {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  imageUrl: string;
  category: string;
  featured: boolean;
  tickets: Ticket[];
}

