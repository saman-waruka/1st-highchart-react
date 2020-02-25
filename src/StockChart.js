import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    // type: "spline"
    type: "column"
  },
  title: {
    text: "My stock chart"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
    }
  ]
};

const StockChart = () => (
  <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  </div>
);

export default StockChart;
