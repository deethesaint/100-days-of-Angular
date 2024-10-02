import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { DiTabGroupComponent } from '../di-tab-group/di-tab-group.component';

@Component({
  selector: 'app-di-tab',
  templateUrl: './di-tab.component.html',
  styleUrl: './di-tab.component.css'
})
export class DiTabComponent {
  @Input() title!: string
  @ViewChild(TemplateRef, {static: true}) panelBody!: TemplateRef<unknown>;

  constructor(private tabGroup: DiTabGroupComponent) {}

  ngAfterViewInit() {
    this.tabGroup.addTab(this)
  }
}
