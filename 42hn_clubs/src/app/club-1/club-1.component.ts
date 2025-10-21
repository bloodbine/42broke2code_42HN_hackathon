import { Component } from '@angular/core';

interface Event {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  attendeeAvatars: string[];
}

@Component({
  selector: 'app-club-1',
  templateUrl: './club-1.component.html',
  styleUrl: './club-1.component.css'
})
export class Club1Component {
  selectedEvent: Event | null = null;

  // Event data
  event1: Event = {
    id: 1,
    title: 'Bi-Weekly Dev session',
    description: 'Join us for an in-person coding session on our current project!',
    fullDescription: 'This is our regular bi-weekly development session where we work on our current game projects. Bring your laptop and ideas! We\'ll have dedicated time for coding, collaboration, and getting feedback from other club members.',
    date: 'Oct 31, 2025',
    time: '4:00 PM - 8:00 PM',
    location: 'Plant Room',
    attendees: 8,
    attendeeAvatars: ['GP', 'KV', 'ZS']
  };

  event2: Event = {
    id: 2,
    title: 'Github Game Off 2025',
    description: 'Join our team participating in this year\'s Github Game Off event!',
    fullDescription: 'We\'re forming teams to participate in the annual Github Game Off. This is a month-long game jam where we\'ll create a game based on a theme. All skill levels welcome! We\'ll have brainstorming sessions, team formation, and regular check-ins throughout the month.',
    date: 'Nov 1, 2025',
    time: '3:00 PM - 8:00 PM',
    location: 'Cluster 3',
    attendees: 12,
    attendeeAvatars: ['GP', 'KV', 'MJ']
  };

  event3: Event = {
    id: 3,
    title: 'Godot Workshop',
    description: 'Learn the basics of Godot, the open source game engine',
    fullDescription: 'New to Godot or want to brush up on your skills? This workshop will cover the fundamentals of the Godot game engine. We\'ll go through scene setup, GDScript basics, creating simple mechanics, and exporting your first game. Perfect for beginners!',
    date: 'Nov 5, 2025',
    time: '1:00 PM - 3:00 PM',
    location: 'Music room',
    attendees: 6,
    attendeeAvatars: ['ZS', 'AB', 'CD']
  };

  openEventModal(event: Event): void {
    this.selectedEvent = event;
    console.log('Opening event modal:', event.title);
  }

  closeEventModal(): void {
    this.selectedEvent = null;
    console.log('Closing event modal');
  }

  subscribeToEvent(): void {
    if (this.selectedEvent) {
      console.log('Subscribed to event:', this.selectedEvent.title);
      // Implement actual subscription logic here
      alert(`Successfully subscribed to ${this.selectedEvent.title}!`);
      this.closeEventModal();
    }
  }

  addToCalendar(): void {
    if (this.selectedEvent) {
      console.log('Adding to calendar:', this.selectedEvent.title);
      // Implement actual calendar integration here
      alert(`Added ${this.selectedEvent.title} to your calendar!`);
    }
  }
}
