import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiTabGroupComponent } from './di-tab-group.component';

describe('DiTabGroupComponent', () => {
  let component: DiTabGroupComponent;
  let fixture: ComponentFixture<DiTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiTabGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
