import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
const moment = require("moment");
const options = {
  chart: {
    type: "column"
  },
  title: {
    text: ""
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
      // data: [
      //   [moment("2019/01").valueOf(), 1000],
      //   [moment("2019/02").valueOf(), 575],
      //   [moment("2019/04").valueOf(), 427],
      //   [moment("2019/05").valueOf(), 399],
      //   [moment("2019/03").valueOf(), 523],
      //   [moment("2019/06").valueOf(), 309],
      //   [moment("2019/07").valueOf(), 278]
      // ]

      data: [
        {
          x: moment("2019/01").valueOf(),
          y: 1000,
          color: "#66a3ff"
        },
        {
          x: moment("2019/02").valueOf(),
          y: 740,
          color: "#66a3ff"
        },
        {
          x: moment("2019/03").valueOf(),
          y: 200,
          color: "#66a3ff"
        },
        {
          x: moment("2019/04").valueOf(),
          y: 0,
          color: "#66a3ff"
        },
        {
          x: moment("2019/05").valueOf(),
          y: 50,
          color: "#66a3ff"
        },
        {
          x: moment("2019/06").valueOf(),
          y: 1100,
          color: "#66a3ff"
        },
        {
          x: moment("2019/07").valueOf(),
          y: 800,
          color: "#66a3ff"
        },
        {
          x: moment("2019/08").valueOf(),
          y: 500,
          color: "#66a3ff"
        },
        {
          x: moment("2019/09").valueOf(),
          y: 900,
          color: "#66a3ff"
        },
        {
          x: moment("2019/10").valueOf(),
          y: 100,
          color: "#66a3ff"
        },
        {
          x: moment("2019/11").valueOf(),
          y: 400,
          color: "#66a3ff"
        },
        {
          x: moment("2019/12").valueOf(),
          y: 800,
          color: "#66a3ff"
        },
        {
          x: moment("2020/01").valueOf(),
          y: 760,
          color: "#66a3ff"
        },
        {
          x: moment("2020/02").valueOf(),
          y: 670,
          color: "#66a3ff"
        }
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
