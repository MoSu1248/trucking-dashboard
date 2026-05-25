import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-linechart',
  imports: [NgxEchartsDirective],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css',
  providers: [provideEchartsCore({ echarts })],
})
export class LinechartComponent {
  options: EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(15, 10, 25, 0.9)',
      borderColor: 'rgba(255, 255, 255, 0.08)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
      axisLabel: { color: 'rgba(255,255,255,0.4)' },
    },
    yAxis: {
      type: 'value',
      min: 80,
      axisLine: { show: false },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.06)' } },
      axisLabel: { color: 'rgba(255,255,255,0.4)' },
    },
    series: [
      {
        type: 'line',
        data: [120, 145, 98, 167, 134, 189],
        smooth: true,
        lineStyle: { color: '#e07340', width: 2 },
        itemStyle: { color: '#e07340' },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(224, 115, 64, 0.3)' },
              { offset: 1, color: 'rgba(224, 115, 64, 0)' },
            ],
          },
        },
      },
    ],
  };
}
