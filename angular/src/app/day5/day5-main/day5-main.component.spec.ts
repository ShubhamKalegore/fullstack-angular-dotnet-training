import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5MainComponent } from './day5-main.component';

describe('Day5MainComponent', () => {
  let component: Day5MainComponent;
  let fixture: ComponentFixture<Day5MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day5MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
