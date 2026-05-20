import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2MainComponent } from './day2-main.component';

describe('Day2MainComponent', () => {
  let component: Day2MainComponent;
  let fixture: ComponentFixture<Day2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
