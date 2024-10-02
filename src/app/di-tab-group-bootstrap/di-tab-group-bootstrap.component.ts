import { Component } from '@angular/core';
import { DiTabGroupComponent } from '../di-tab-group/di-tab-group.component';

@Component({
  selector: 'app-di-tab-group-bootstrap',
  templateUrl: './di-tab-group-bootstrap.component.html',
  styleUrl: './di-tab-group-bootstrap.component.css',
  providers: [
    {
      provide: DiTabGroupComponent,
      useExisting: DiTabGroupBootstrapComponent
    }
  ]
})
export class DiTabGroupBootstrapComponent extends DiTabGroupComponent {

}
