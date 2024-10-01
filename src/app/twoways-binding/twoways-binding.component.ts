import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-twoways-binding',
  templateUrl: './twoways-binding.component.html',
  styleUrl: './twoways-binding.component.css'
})
export class TwowaysBindingComponent {
  name='Name'
  namex='Namex'

  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
}
