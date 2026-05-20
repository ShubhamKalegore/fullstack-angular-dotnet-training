import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { TrainingPlanComponent } from './training-plan/training-plan.component';
import { TRAINING_DAYS } from './training-plan/training-days';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TrainingPlanComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedDay = 'day0';
  selectedTrainingDay = 'day1';
  showTrainingPlan = false;
  contentDays = ['day0', 'day1', 'day2', 'day3'];
  trainingDays = TRAINING_DAYS;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.selectedDay = event.urlAfterRedirects.split('/')[1] || 'day0';
        this.syncTrainingDayWithContentDay();
      });
  }

  navigateDay() {
    this.syncTrainingDayWithContentDay();
    this.router.navigate([this.selectedDay]);
  }

  navigateTrainingDay() {
    this.selectedDay = this.contentDays.includes(this.selectedTrainingDay)
      ? this.selectedTrainingDay
      : 'day0';

    this.router.navigate([this.selectedDay]);
  }

  private syncTrainingDayWithContentDay() {
    const matchingTrainingDay = this.trainingDays.find(day => day.day === this.selectedDay);

    if (matchingTrainingDay) {
      this.selectedTrainingDay = matchingTrainingDay.day;
    }
  }
}
