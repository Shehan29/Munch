import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {
    @ViewChild('doughnutCanvas') doughnutCanvas;
    @ViewChild('lineCanvas') lineCanvas;
    doughnutChart: any;
    lineChart: any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){

      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
              labels: ["Carbohydrates", "Proteins", "Sugars", "Fats", "Iron"],
              datasets: [{
                  label: '# of Votes',
                  data: [20, 10, 8, 5, 2],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#FF6384",
                      "#36A2EB",
                  ]
              }]
          }

      });
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: ["9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
              datasets: [
                  {
                      label: "Caloriesss",
                      fill: false,
                      lineTension: 0.1,
                      backgroundColor: "rgba(75,192,192,0.4)",
                      borderColor: "rgba(75,192,192,1)",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "rgba(75,192,192,1)",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "rgba(75,192,192,1)",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [500, 1100, 1400, 1800, 1900, 1950],
                      spanGaps: false,
                  }
              ]
          }

      });
  }

}
