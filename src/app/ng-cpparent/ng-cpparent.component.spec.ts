import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCPParentComponent } from './ng-cpparent.component';

describe('NgCPParentComponent', () => {
  let component: NgCPParentComponent;
  let fixture: ComponentFixture<NgCPParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgCPParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCPParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
