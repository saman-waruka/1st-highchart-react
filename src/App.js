import React from "react";
import LineChart from "./LineChart";
import StockChart from "./StockChart";
import BarChart from "./BarChart";
import BarStock from "./BarStock";

import HighMap from "./HighMap";

const App = () => (
  <div>
    <LineChart />
    <StockChart />
    <HighMap />
    <BarChart />
    <BarStock />
  </div>
);

export default App;
