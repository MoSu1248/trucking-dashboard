import { Component } from '@angular/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { RecentPatientsComponent } from './components/recent-patients/recent-patients.component';
import { CoordinatorsComponent } from './components/coordinators/coordinators.component';

@Component({
  selector: 'app-home',
  imports: [
    StatisticsComponent,
    PiechartComponent,
    LinechartComponent,
    CoordinatorsComponent,
    RecentPatientsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
