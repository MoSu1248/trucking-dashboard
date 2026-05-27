import { Component } from '@angular/core';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PiechartComponent } from './components/piechart/piechart.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { RecentPatientsComponent } from './components/recent-patients/recent-patients.component';

@Component({
  selector: 'app-home',
  imports: [
    StatisticsComponent,
    PiechartComponent,
    EmployeeTableComponent,
    LinechartComponent,
    RecentPatientsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
