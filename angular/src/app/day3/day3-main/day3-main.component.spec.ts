import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3MainComponent } from './day3-main.component';

describe('Day3MainComponent', () => {
  let component: Day3MainComponent;
  let fixture: ComponentFixture<Day3MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day3MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
