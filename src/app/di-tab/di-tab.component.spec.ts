import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiTabComponent } from './di-tab.component';

describe('DiTabComponent', () => {
  let component: DiTabComponent;
  let fixture: ComponentFixture<DiTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
