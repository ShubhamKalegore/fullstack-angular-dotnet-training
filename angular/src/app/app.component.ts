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
  trainingDays = TRAINING_DAYS;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.selectedDay = event.urlAfterRedirects.split('/')[1] || 'day0';
      });
  }

  navigateDay() {
    this.router.navigate([this.selectedDay]);
  }
}
