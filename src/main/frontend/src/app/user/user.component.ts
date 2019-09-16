import { Component, OnInit } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Load Charts and the corechart package for pie chart.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Draw the pie chart for Sales by Category when Charts is loaded.
    google.charts.setOnLoadCallback(drawSalesByCategoryChart);

    // Callback that draws the pie chart for Sales by Category.
    function drawSalesByCategoryChart() {

      // Create the data table for Sales by Category.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Item Category');
      data.addColumn('number', 'Number Purchased');
      data.addRows([
        ['Books', 40],
        ['Food', 26],
        ['Medical', 12],
        ['Music', 8],
        ['Luxury Items', 6],
        ['Clothes', 8]
      ]);

      // Set options for Sales by Category.
      var options = {
        width: 500,
        height: 400,
        legend: {'alignment': 'center'},
        colors: ['#421C52', '#76609E', '#732C7B', '#9C8AA5', '#BDAEC6', '#D3D3D3'],
        is3D: true
      };

      // Instantiate and draw chart for Sales by Category.
      var chart = new google.visualization.PieChart(document.getElementById('Category_chart_div'));
      chart.draw(data, options);
    }

    // Load Charts and the corechart package for line chart.
    google.charts.load('current', { 'packages': ['corechart', 'line'] });

    // Draw the line chart for Sales Trend when Charts is loaded.
    google.charts.setOnLoadCallback(drawSalesTrendChart);

    // Callback that draws the line chart for Sales Trend.
    function drawSalesTrendChart() {

      //Create data table for Sales Trend.
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day of the Month');
      data.addColumn('number', 'Amount of Medicine Purchased');
      data.addRows([
        [0, 1],
        [5, 1],
        [10, 2],
        [15, 3],
        [20, 1],
        [25, 1],
        [30, 5]
      ]);

      //Set options for Sales Trend.
      var options = {
        curveType: 'function',
        legend: { position: 'none' },
        colors: ['#990099'],
        width: 900,
        height: 400,
        vAxis: { title: "Amount Purchased" },
        hAxis: { title: "Day of the Month" },
      };

      //Instantiate and draw chart for Sales Trend.
      var chart = new google.visualization.LineChart(document.getElementById('Trend_chart_div'));
      chart.draw(data, options);
    }
  }
}