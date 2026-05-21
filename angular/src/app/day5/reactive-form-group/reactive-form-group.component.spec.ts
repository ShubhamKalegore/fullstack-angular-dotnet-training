import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGroupComponent } from './reactive-form-group.component';

describe('ReactiveFormGroupComponent', () => {
  let component: ReactiveFormGroupComponent;
  let fixture: ComponentFixture<ReactiveFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
