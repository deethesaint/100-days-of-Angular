import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  counter = 0;
  childs = ['child 1', 'child 2', 'child 3'];
}
