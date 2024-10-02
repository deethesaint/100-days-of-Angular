import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101days';
  isChecked = false;
  activeIndex = 0;
  anotherIndex = 0;
}
