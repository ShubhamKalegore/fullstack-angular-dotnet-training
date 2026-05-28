import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16MainComponent } from './day16-main.component';

describe('Day16MainComponent', () => {
  let component: Day16MainComponent;
  let fixture: ComponentFixture<Day16MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day16MainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day16MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
