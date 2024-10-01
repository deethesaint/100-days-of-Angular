import { Component } from '@angular/core';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrl: './input-binding.component.css'
})
export class InputBindingComponent {
  progress = 20;

  handle() {
    if (this.progress < 99) {
      this.progress = this.progress + 10
    } else {
      this.progress = 100
    }
  }
}
