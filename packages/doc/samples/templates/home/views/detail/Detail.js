/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import Grid from "@hv/uikit-react-core/dist/Grid";
import HvKpi from "@hv/uikit-react-core/dist/Kpi";
import Good from "@hv/uikit-react-icons/dist/Generic/Level0.Good";
import Linechart from "@hv/uikit-react-core/dist/Linechart";
import Barchart from "@hv/uikit-react-core/dist/Barchart";
import Table from "./table/Table";
import data from "../../data/tableInventoryData";
import getColumns from "../../configuration/tableConfiguration";
import dataLine from "../../configuration/lineChartConfiguration";
import dataBar from "../../configuration/barChartConfiguration";

const labels = {
  title: "Avg. service time",
  indicator: "124 14",
  unit: "",
  comparisonIndicatorInfo: "vs last 24h.",
  comparisonIndicator: "10%"
};

const averageComparisonVisualAverage = classes => (
  <div className={classes.kpi}>
    <div className={classes.kpiInner} />
    <HvTypography className={classes.kpiTypography} variant="highlightText">
      {labels.comparisonIndicator}
    </HvTypography>
  </div>
);

const Detail = ({ classes }) => {
  const columns = getColumns();

  return (
    <Grid container>
      <Grid item xs={1} sm={2} md={4} lg={4} xl={4}>
        <HvKpi
          labels={labels}
          visualComparison={averageComparisonVisualAverage(classes)}
        />
      </Grid>
      <Grid item xs={1} sm={2} md={4} lg={4} xl={4}>
        <HvKpi labels={labels} visualIndicator={<Good semantic="sema1" />} />
      </Grid>
      <Grid item xs={1} sm={2} md={4} lg={4} xl={4}>
        <HvKpi labels={labels} />
      </Grid>
      <Grid item xs={4} sm={8} md={12} lg={12} xl={12}>
        <Table data={data} columns={columns} title="Insights" />
      </Grid>
      <Grid item xs={4} sm={8} md={12} lg={12} xl={12}>
        <HvTypography variant="mTitle" className={classes.title}>
          Insight
        </HvTypography>
        <Linechart
          title="Try to resize me from left to right."
          subtitle="You'll see that I'm learning hot to responsively behave. I can also transform into a another chart type."
          data={dataLine}
          xAxisTitle="2018"
          yAxisTitle="Thousands of Dollars ($)"
        />
      </Grid>
      <Grid item xs={4} sm={8} md={12} lg={12} xl={12}>
        <HvTypography variant="mTitle" className={classes.title}>
          Story
        </HvTypography>
        <Barchart
          title="Try to resize me from left to right."
          subtitle="You'll see that I'm learning hot to responsively behave. I can also transform into a another chart type."
          data={dataBar}
          xAxisTitle="2018"
          yAxisTitle="Thousands of Dollars ($)"
        />
      </Grid>
    </Grid>
  );
};

export default Detail;