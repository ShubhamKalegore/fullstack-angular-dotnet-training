import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day7MainComponent } from './day7-main.component';

describe('Day7MainComponent', () => {
  let component: Day7MainComponent;
  let fixture: ComponentFixture<Day7MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day7MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day7MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
