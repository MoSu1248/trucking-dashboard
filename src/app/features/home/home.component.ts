import { Component } from '@angular/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PiechartComponent } from './components/piechart/piechart.component';

@Component({
  selector: 'app-home',
  imports: [StatisticsComponent , PiechartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
