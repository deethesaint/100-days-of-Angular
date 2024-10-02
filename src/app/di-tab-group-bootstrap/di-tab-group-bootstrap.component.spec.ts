import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiTabGroupBootstrapComponent } from './di-tab-group-bootstrap.component';

describe('DiTabGroupBootstrapComponent', () => {
  let component: DiTabGroupBootstrapComponent;
  let fixture: ComponentFixture<DiTabGroupBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiTabGroupBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiTabGroupBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
