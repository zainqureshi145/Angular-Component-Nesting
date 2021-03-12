import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree', userName: 'nature', content: 'Saw this amazing tree on my way', imageUrl: 'assets/tree.jpeg' },
    { title: 'Snowy Mountain', userName: 'mr. peep', content: 'Snow covered peaks', imageUrl: 'assets/mountain.jpeg' },
    { title: 'Mountain Bike', userName: 'noos', content: 'Mountain biking', imageUrl: 'assets/biking.jpeg' },
  ]
}
