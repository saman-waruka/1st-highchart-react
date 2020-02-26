import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
const moment = require("moment");
const options = {
  chart: {
    type: "column"
  },
  title: {
    text: "StockChart"
  },
  xAxis: {
    type: "datetime",
    labels: {
      formatter: function() {
        return Highcharts.dateFormat("%m/%Y", this.value);
      }
    }
  },
  yAxis: {
    labels: {
      enabled: true
    }
  },
  legend: {
    reversed: false
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  },
  series: [
    {
      name: "Votes",
      data: [
        [moment("2019/01").valueOf(), 1000],
        [moment("2019/02").valueOf(), 575],
        [moment("2019/03").valueOf(), 523],
        [moment("2019/04").valueOf(), 427],
        [moment("2019/05").valueOf(), 399],
        [moment("2019/06").valueOf(), 309],
        [moment("2019/07").valueOf(), 278]
        // [1456365947000, 239],
        // [1456466947000, 235],
        // [1456567947000, 203],
        // [1456668947000, 182],
        // [1456769947000, 157]
        // ["Sankey Diagram", 149],
        // ["Add Navigation bar for Y-Axis in Highstock", 144],
        // ["Grouped x-axis", 143],
        // ["ReactJS plugin", 137],
        // ["3D surface charts", 134],
        // ["Draw lines over a stock chart, for analysis purpose", 118],
        // ["Data module for database tables", 118],
        // ["Draggable points", 117]
      ]
    }
  ],
  scrollbar: {
    enabled: true
  },
  credits: {
    enabled: false
  },
  rangeSelector: {
    enabled: true
  },
  navigator: {
    enabled: true
  }
};

const StockChart = () => (
  <div>
    StockChart
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"StockChart"}
      // constructorType={"ganttChart"}
      options={options}
    />
  </div>
);

export default StockChart;
