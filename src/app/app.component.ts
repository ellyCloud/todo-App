import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = 'Elif';

  items = [
    { description: 'Breakfast', action: 'No' },
    { description: 'Sports', action: 'No' },
    { description: 'Paying Bills', action: 'Yes' },
    { description: 'Go to the Cinema', action: 'No' },
  ];
}
