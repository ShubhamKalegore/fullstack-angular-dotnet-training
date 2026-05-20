import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TrainingDay } from './training-days';

@Component({
  selector: 'app-training-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-plan.component.html',
  styleUrl: './training-plan.component.css'
})
export class TrainingPlanComponent {
  @Input() selectedDay = 'day1';
  @Input() trainingDays: TrainingDay[] = [];

  get dayPlan(): TrainingDay | undefined {
    return this.trainingDays.find(day => day.day === this.selectedDay);
  }
}
