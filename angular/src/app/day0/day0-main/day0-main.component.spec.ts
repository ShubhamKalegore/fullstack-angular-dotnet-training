import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day0MainComponent } from './day0-main.component';

describe('Day0MainComponent', () => {
  let component: Day0MainComponent;
  let fixture: ComponentFixture<Day0MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day0MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day0MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
