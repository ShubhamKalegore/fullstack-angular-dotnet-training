import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8MainComponent } from './day8-main.component';

describe('Day8MainComponent', () => {
  let component: Day8MainComponent;
  let fixture: ComponentFixture<Day8MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day8MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day8MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
