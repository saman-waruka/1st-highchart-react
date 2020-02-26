import React, { useRef } from "react";
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
  zoomType: "x",
  series: [
    {
      data: [
        // ["a", 1],
        // ["b", 2],
        // ["c", 2],
        // ["d", 2]
        {
          x: 2,
          y: 9,
          name: "Point1",
          color: "#00FF00"
        },
        {
          x: 3,
          y: 6,
          name: "Point2",
          color: "#00FF00"
        }

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
  ],
  scrollbar: {
    enabled: true
  }
};

const options2 = {
  chart: {
    // type: "column",
    type: "spline",
    scrollablePlotArea: {
      minWidth: 700,
      scrollPositionX: 1
    }
  },
  title: {
    text: "LineChart"
  },
  xAxis: {
    categories: [""],
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
    reversed: true
  },
  plotOptions: {
    series: {
      // stacking: "normal",
      series: {
        allowPointSelect: true
      }
    }
  },
  series: [
    {
      data: [
        {
          x: 1,
          y: 9,
          name: "Point2",
          color: "#00FF00"
        },
        {
          x: 2,
          y: 6,
          name: "Point3"
        },
        {
          x: 3,
          y: 6,
          name: "Point4"
        },
        {
          x: 4,
          y: 6,
          name: "Point5"
        },
        {
          x: 5,
          y: 6,
          name: "Point6"
        },
        {
          x: 6,
          y: 6,
          name: "Point7"
        },
        {
          x: 7,
          y: 6,
          name: "Point8"
        }
      ]
    }
  ],
  credits: {
    enabled: false
  }
};
const LineChart = () => {
  const chartRef = useRef();
  console.log(" Ref => ", chartRef);
  return (
    <div>
      Line chart
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options2}
        constructorType={"chart"}
      />
    </div>
  );
};

export default LineChart;
