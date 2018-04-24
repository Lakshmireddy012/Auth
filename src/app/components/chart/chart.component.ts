import { Component, OnInit, ElementRef } from '@angular/core';

import * as data from "../../JSON_Format_for_Assignment.json";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 
  // data = [{ month: 'Jan', income: 100 }, { month: 'Feb', income: 500 }
  //   , { month: 'Mar', income: 250 }, { month: 'Apr', income: 190 }
  //   , { month: 'May', income: 50 }, { month: 'Jun', income: 300 }
  //   , { month: 'Jul', income: 300 }, { month: 'Aug', income: 250 }
  //   , { month: 'Sep', income: 666 }, , { month: 'Oct', income: 554 }
  //   , { month: 'Nov', income: 54 }, , { month: 'Dec', income: 454 }]
  constructor() {
    

  }
  ngOnInit() {
  
  }
  drawGraph() {

  }



}
