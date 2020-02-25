import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    // type: "spline"
    type: "column"
  },
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [
        1,
        2,
        1,
        4
        // 3,
        // 6,
        // 7,
        // 9,
        // 2
        // 2,
        // 2,
        // 2,
        // 1,
        // 1,
        // 4,
        // 5,
        // 6,
        // 6,
        // 2,
        // 1,
        // 4,
        // 3,
        // 6,
        // 7,
        // 9,
        // 2,
        // 2,
        // 2,
        // 2,
        // 1,
        // 1,
        // 4,
        // 5,
        // 6,
        // 2,
        // 1,
        // 4,
        // 3,
        // 6,
        // 7,
        // 9,
        // 2,
        // 2,
        // 2,
        // 2,
        // 1,
        // 1,
        // 4,
        // 5,
        // 6
      ]
    }
  ]
};

const LineChart = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default LineChart;
