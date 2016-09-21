import {Component, OnInit} from "@angular/core";
import {Observable, Subscription} from "rxjs/Rx";
import { Router } from '@angular/router';

import {ClickyService} from "./clicky.service";
import {ProductService} from "../api-service/product/product.service";
// import {ProductService} from '../product/index';


declare var Chart:any;
// import '../../../../node_modules/chart.js/dist/Chart.bundle.js';

@Component({
  moduleId: module.id,
  selector: 'mp-clicky-component',
  templateUrl: `templates/clicky.template.html`,
  styleUrls: ['styles/clicky.template.css'],
})

export class ClickyComponent {

  views:number = 0;
  items:any = [];
  data:any = [];
  dates:any = [];

  clicks:number = 0;
  items__2:any = [];
  data__2:any = [];
  dates__2:any = [];


  onLoad:boolean = true;
  selected:string = '';

  sub:Subscription;
  apps$:Observable<any>;
  apps:any[] = [];

  constructor(private _clickyService:ClickyService,
              private _productService:ProductService,
              private _router:Router) {
  }

  ngOnInit() {
    // this.getAnalytics("ADA");
    this.getProductOfDeveloper();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProductOfDeveloper() {
    this.apps$ = this._productService.getProductOfDeveloper();
    this.sub = this.apps$.subscribe((apps:any) => {
      this.apps = apps;
      //sconsole.log(apps[0].name);
      this.getAnalytics(apps[0].id);
    });
  }

  getAnalytics(name:any) {

    if (this.onLoad) {

      this.onLoad = false;
      this.selected = name;

      this.lineChartData[0].label = "Views this week ";
      this.lineChartData__2[0].label = "Clicks this week ";

      this.lineChartLabels = new Array(7);
      this.lineChartLabels__2 = new Array(7);

      this.views = 0;
      this.dates = [];

      this.clicks = 0;
      this.dates__2 = [];

      //console.log(`name of app ${name}, path ${path}`);

      this._clickyService.loadVisitors(name)
        .subscribe(
          data => {

            //console.log(data);

            this.data = data[0].dates;

            for (let i = 0; i < this.data.length; i++) {

              //Date
              this.dates.push(this.data[i].date);

              var sum:number = 0;
              for (let j = 0; j < this.data[i].items.length; j++) {
                sum += +this.data[i].items[j].value;

              }
              this.views += sum;
              this.items[i] = sum;

            }
            this.update();

            this.onLoad = true;
          },
          error => console.error(error)
        );

      this._clickyService.loadEvents(name)
        .subscribe(
          data => {
            this.data__2 = data[0].dates;

            for (let i = 0; i < this.data__2.length; i++) {

              //Date
              this.dates__2.push(this.data__2[i].date);

              var sum:number = 0;
              for (let j = 0; j < this.data__2[i].items.length; j++) {
                sum += +this.data__2[i].items[j].value;

              }
              this.clicks += sum;
              this.items__2[i] = sum;

            }
            this.update2();

          },
          error => console.error(error)
        );
    }
  }

  // lineChart
  public lineChartData:Array<any> = [
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Views this week  '}
  ];
  public lineChartLabels:Array<any> = new Array(7);
  public lineChartOptions:any = {
    animation: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        scaleLabel: {
          display: true,
          labelString: 'views'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'days'
        }
      }]
    }
  };
  public lineChartColours:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  //lineChart 2
  public lineChartData__2:Array<any> = [
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Clicks this week  '}
  ];
  public lineChartLabels__2:Array<any> = new Array(7);
  public lineChartOptions__2:any = {
    animation: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        scaleLabel: {
          display: true,
          labelString: 'clicks'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'days'
        }
      }]
    }
  };
  public lineChartColours__2:Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend__2:boolean = true;
  public lineChartType__2:string = 'line';


  public update():void {

    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {
        data: new Array(this.lineChartData[i].data.length),
        label: this.lineChartData[i].label + this.views.toString()
      };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = this.items[j];
      }
    }

    this.lineChartLabels = this.dates;
    this.lineChartData = _lineChartData;
  }

  public update2():void {

    let _lineChartData:Array<any> = new Array(this.lineChartData__2.length);
    for (let i = 0; i < this.lineChartData__2.length; i++) {
      _lineChartData[i] = {
        data: new Array(this.lineChartData__2[i].data.length),
        label: this.lineChartData__2[i].label + this.clicks.toString()
      };
      for (let j = 0; j < this.lineChartData__2[i].data.length; j++) {
        _lineChartData[i].data[j] = this.items__2[j];
      }
    }

    this.lineChartLabels__2 = this.dates__2;
    this.lineChartData__2 = _lineChartData;
  }


  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }

  public chartHovered(e:any):void {
    //console.log(e);
  }

  logs:any[];
  reviews_length:number;

  showLog(product_log:any) {
    // console.log('log',product_log)
    this.logs = product_log;

  }

  goToEditApp(appId:number){
    this._router.navigate([`/vendor/edit/${appId}`]);
  }


}
