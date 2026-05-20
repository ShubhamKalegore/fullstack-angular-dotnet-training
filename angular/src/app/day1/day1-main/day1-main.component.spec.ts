import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1MainComponent } from './day1-main.component';

describe('Day1MainComponent', () => {
  let component: Day1MainComponent;
  let fixture: ComponentFixture<Day1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day1MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
