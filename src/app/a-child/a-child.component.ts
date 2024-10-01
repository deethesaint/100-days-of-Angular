import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-a-child',
  templateUrl: './a-child.component.html',
  styleUrl: './a-child.component.css'
})
export class AChildComponent {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(){
    this.checkedChange.emit(!this.checked);
  }
}
