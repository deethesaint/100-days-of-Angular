import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaysBindingComponent } from './twoways-binding.component';

describe('TwowaysBindingComponent', () => {
  let component: TwowaysBindingComponent;
  let fixture: ComponentFixture<TwowaysBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwowaysBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaysBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
