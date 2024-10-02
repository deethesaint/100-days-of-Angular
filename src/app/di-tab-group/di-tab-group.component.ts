import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiTabComponent } from '../di-tab/di-tab.component';

@Component({
  selector: 'app-di-tab-group',
  templateUrl: './di-tab-group.component.html',
  styleUrl: './di-tab-group.component.css'
})
export class DiTabGroupComponent {
  tabPanelList: DiTabComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  addTab(tab: DiTabComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
  }

  removeTab(tab: DiTabComponent) {
    let found = -1;
    let temp = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    });
    
    if (found === this.activeIndex) {
      console.log('Current active index: ' + this.activeIndex)
      this.activeIndexChange.emit(found >= this.tabPanelList.length - 1 ? found - 1 : found);
    } else if (found === 0) {
      this.activeIndexChange.emit(0)
    } else if (found < this.activeIndex) {
      console.log(found + '/' + this.activeIndex)
      this.activeIndexChange.emit(this.tabPanelList.length - 2);
    }
    this.tabPanelList = temp;
    
  }

  handle(idx:number) {
    this.activeIndexChange.emit(idx)
  }

}
