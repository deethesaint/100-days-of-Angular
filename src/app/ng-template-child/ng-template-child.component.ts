import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-template-child',
  templateUrl: './ng-template-child.component.html',
  styleUrl: './ng-template-child.component.css'
})
export class NgTemplateChildComponent {
  @Input() childs!: string[];
  @Input() ngTemplate!: TemplateRef<any>;
}
