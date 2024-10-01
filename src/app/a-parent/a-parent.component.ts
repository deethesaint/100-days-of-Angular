import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AChildComponent } from '../a-child/a-child.component';

@Component({
  selector: 'app-a-parent',
  templateUrl: './a-parent.component.html',
  styleUrl: './a-parent.component.css'
})
export class AParentComponent {
  @ViewChild('toggleComp', {static: true}) toggleComp!: AChildComponent;
  @ViewChild('focusInput', {static: true}) focusInput!: ElementRef<HTMLInputElement>;
  @ViewChildren(AChildComponent) childs!: QueryList<AChildComponent>;

  isCheck = true;
  showLast = true;

  ngOnInit() {

    // setTimeout(() => {
    // this.focusInput.nativeElement.focus();
    // }, 3000)
    // console.log(this.toggleComp);

  }
  // ViewChild only resolved here
  ngAfterViewInit() {
    this.childs.changes.subscribe(console.log)
    setTimeout(() => {
      this.toggleComp.toggle();
    }, 1000);
  }
}
