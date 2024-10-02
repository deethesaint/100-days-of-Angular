import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCPChildComponent } from './ng-cpchild.component';

describe('NgCPChildComponent', () => {
  let component: NgCPChildComponent;
  let fixture: ComponentFixture<NgCPChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgCPChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCPChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
