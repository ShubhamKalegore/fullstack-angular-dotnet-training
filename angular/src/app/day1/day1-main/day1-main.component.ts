import { Component } from '@angular/core';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Home } from '../home/home';
import { UserForm } from '../user-form/user-form';
import { CustomDirective } from '../custom-directive/custom-directive';

@Component({
  selector: 'app-day1-main',
  standalone: true,
  imports: [
    Header,
    Footer,
    Home,
    UserForm,
    CustomDirective
  ],
  templateUrl: './day1-main.component.html',
  styleUrl: './day1-main.component.css'
})
export class Day1MainComponent {

}