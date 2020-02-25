import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column"
  },
  title: {
    text: "TITLE"
  },
  xAxis: {
    categories: ["name"],
    labels: {
      enabled: true
    },
    max: 6
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
      data: [
        {
          x: 1,
          y: 6,
          name: "Point1",
          color: "#00FF00"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
        },
        {
          x: 2,
          y: 9,
          name: "Point2",
          color: "#00FF00",
          width: "20px"
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
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"StockChart"}
      // constructorType={"ganttChart"}
      options={options}
    />
  </div>
);

export default StockChart;
