import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4MainComponent } from './day4-main.component';

describe('Day4MainComponent', () => {
  let component: Day4MainComponent;
  let fixture: ComponentFixture<Day4MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day4MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
