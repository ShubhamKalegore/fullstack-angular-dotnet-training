import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { CONTENT_DAYS } from './content-days';
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
  showContentDay = true;
  showTrainingPlan = false;
  contentDays = CONTENT_DAYS;
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
    this.selectedDay = this.isContentDayAvailable(this.selectedTrainingDay)
      ? this.selectedTrainingDay
      : 'day0';

    this.router.navigate([this.selectedDay]);
  }

  private isContentDayAvailable(dayValue: string) {
    return this.contentDays.some(day => day.value === dayValue);
  }

  private syncTrainingDayWithContentDay() {
    const matchingTrainingDay = this.trainingDays.find(day => day.day === this.selectedDay);

    if (matchingTrainingDay) {
      this.selectedTrainingDay = matchingTrainingDay.day;
    }
  }
}
