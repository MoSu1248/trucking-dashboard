import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-piechart',
  imports: [NgxEchartsDirective],
  templateUrl: './piechart.component.html',
  providers: [provideEchartsCore({ echarts })],

  styleUrl: './piechart.component.css',
})
export class PiechartComponent {
  options: EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
      backgroundColor: 'rgba(15, 10, 25, 0.9)',
      borderColor: 'rgba(255, 255, 255, 0.08)',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    legend: {
      show: true,
      bottom: 0,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 12,
      },
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
    },
    series: [
      {
        type: 'pie',
        radius: ['30%', '55%'],
        center: ['50%', '45%'],
        label: { show: false },
        data: [
          { value: 49, name: 'Positive' },
          { value: 120, name: 'Negative' },
          { value: 30, name: 'Pending' },
        ],

        itemStyle: {
          borderWidth: 2,
          borderColor: 'rgba(255, 255, 255, 0.05)',
          color: (params: any) => {
            const colors = [
              'rgba(224, 115, 64, 0.7)',
              'rgba(124, 58, 237, 0.6)',
              'rgba(255, 255, 255, 0.08)',
            ];
            return colors[params.dataIndex];
          },
        },
      },
    ],
  };
}
