import {
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { CONTENT_DAYS } from './content-days';
import { AuthService } from './shared/services/auth.service';
import { TrainingPlanComponent } from './training-plan/training-plan.component';
import { DOTNET_TRAINING_DAYS, TRAINING_DAYS } from './training-plan/training-days';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TrainingPlanComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('previousMessagesList') previousMessagesContainer?: ElementRef<HTMLDivElement>;

  selectedDay = 'day0';
  selectedTechnology = 'angular';
  selectedTrainingDay = 'day1';
  isNotificationsOpen = false;
  isMessagePanelOpen = false;
  isProfileOpen = false;
  messageText = '';
  previousMessages = [
    {
      text: 'Welcome. How can we help you today?',
      mine: false
    },
    {
      text: 'You can send your message from this panel.',
      mine: false
    }
  ];

  activeView = signal<'content' | 'training' | null>('content');
  contentDays = CONTENT_DAYS;
  technologyOptions = [
    { value: 'angular', label: 'Angular' },
    { value: 'dotnet', label: '.NET' }
  ];
  trainingDays = TRAINING_DAYS;

  get isControlsCentered() {
    return this.activeView() === null;
  }

  get selectedTrainingPlan() {
    return this.trainingDays.find(day => day.day === this.selectedTrainingDay)
      ?? this.trainingDays[0];
  }

  constructor(
    private router: Router,
    public authService: AuthService
  ) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => {
        this.selectedDay = event.urlAfterRedirects.split('/')[1] || 'day0';
        this.syncTrainingDayWithContentDay();
      });
  }

  navigateDay() {
    this.activeView.set('content');
    this.useAngularTrainingDays();
    this.syncTrainingDayWithContentDay();
    const route = this.selectedDay === 'day4'
      ? ['day4', 'dashboard']
      : [this.selectedDay];

    this.router.navigate(route);
  }

  navigateTrainingDay() {
    this.activeView.set('training');
    this.selectedDay = this.isContentDayAvailable(this.selectedTrainingDay)
      ? this.selectedTrainingDay
      : 'day0';

    this.router.navigate([this.selectedDay]);
  }

  changeTechnology() {
    this.trainingDays = this.selectedTechnology === 'dotnet'
      ? DOTNET_TRAINING_DAYS
      : TRAINING_DAYS;

    this.selectedTrainingDay = this.trainingDays[0]?.day || 'day1';
  }

  changeUserTrainingDay() {
    this.activeView.set('content');
  }

  private isContentDayAvailable(dayValue: string) {
    return this.contentDays.some(day => day.value === dayValue);
  }

  private useAngularTrainingDays() {
    this.selectedTechnology = 'angular';
    this.trainingDays = TRAINING_DAYS;
  }

  private syncTrainingDayWithContentDay() {
    const matchingTrainingDay = this.trainingDays.find(day => day.day === this.selectedDay);

    if (matchingTrainingDay) {
      this.selectedTrainingDay = matchingTrainingDay.day;
    }
  }

  showContent() {
    this.activeView.set(this.activeView() === 'content' ? null : 'content');
  }

  showTraining() {
    this.activeView.set(this.activeView() === 'training' ? null : 'training');
  }

  logout() {
    this.authService.logout();
    this.closePopups();
    this.activeView.set('content');
    this.router.navigate(['/day16']);
  }

  @HostListener('document:click')
  closePopups() {
    this.isNotificationsOpen = false;
    this.isMessagePanelOpen = false;
    this.isProfileOpen = false;
  }

  toggleNotifications(event: MouseEvent) {
    event.stopPropagation();
    this.isNotificationsOpen = !this.isNotificationsOpen;
    this.isMessagePanelOpen = false;
    this.isProfileOpen = false;
  }

  toggleProfile(event: MouseEvent) {
    event.stopPropagation();
    this.isProfileOpen = !this.isProfileOpen;
    this.isNotificationsOpen = false;
    this.isMessagePanelOpen = false;
  }

  toggleMessagePanel(event: MouseEvent) {
    event.stopPropagation();
    this.isMessagePanelOpen = !this.isMessagePanelOpen;
    this.isNotificationsOpen = false;
    this.isProfileOpen = false;

    if (this.isMessagePanelOpen) {
      this.scrollMessagesToBottom();
    }
  }

  keepPopupOpen(event: MouseEvent) {
    event.stopPropagation();
  }

  closeMessagePanel(event: MouseEvent) {
    event.stopPropagation();
    this.isMessagePanelOpen = false;
  }

  sendMessage() {
    const message = this.messageText.trim();

    if (!message) {
      return;
    }

    this.previousMessages = [
      ...this.previousMessages,
      {
        text: message,
        mine: true
      }
    ];
    this.messageText = '';
    this.scrollMessagesToBottom();
  }

  private scrollMessagesToBottom() {
    setTimeout(() => {
      const messagesContainer = this.previousMessagesContainer?.nativeElement;

      if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    });
  }
}
