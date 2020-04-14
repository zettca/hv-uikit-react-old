import React from "react";
import HvBarchart from "../Barchart";

export default {
  title: "Visualizations/Bar Chart",
  parameters: {
    componentSubtitle: null,
    usage: "import { HvBarchart } from '@hv/uikit-react-core/dist'",
    docs: {
      inlineStories: false
    }
  },
  component: HvBarchart
};

export const Main = () => (
  <HvBarchart
    title="Simple Vertical Bar Chart"
    subtitle="Sales performance (YTD)"
    xAxisTitle="Thousands of Dollars ($)"
    yAxisTitle="Axis description"
    data={[
      {
        x: ["January", "February", "March"],
        y: [2300, 1000, 8500],
        name: "Sales Target"
      }
    ]}
  />
);

export const VerticalWithSingleTooltip = () => {
  const trace1 = {
    x: ["January", "February", "March"],
    y: [2300, 1000, 8500],
    name: "Sales Target"
  };

  const data = [trace1];

  const layout = {
    xaxis: { title: { text: "2018" } },
    yaxis: { title: { text: "Thousands of Dollars ($)" } }
  };

  return (
    <HvBarchart
      title="Simple Vertical Bar Chart"
      subtitle="Sales performance (YTD)"
      data={data}
      tooltipType="single"
      xAxisTitle="Thousands of Dollars ($)"
      yAxisTitle="Axis description"
      layout={layout}
    />
  );
};

VerticalWithSingleTooltip.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample with a tooltip in single line mode."
    }
  }
};

export const GroupedVerticalBarchart = () => {
  const data = [
    { x: ["Group 1", "Group 2", "Group 3"], y: [2300, 1000, 8500], name: "Sales Target" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [6000, 3900, 1000], name: "Sales Per Rep" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [3700, 7500, 1100], name: "Monthly Sales" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [2100, 8500, 3000], name: "Target" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [500, 8000, 9500], name: "Cash" }
  ];

  return (
    <HvBarchart
      title="Grouped Vertical Bar Chart"
      subtitle="Sales performance (YTD)"
      data={data}
      xAxisTitle="Thousands of Dollars ($)"
      yAxisTitle="Axis description"
    />
  );
};

GroupedVerticalBarchart.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample that shows the ability to group bars."
    }
  }
};

export const StackedVerticalBarchart = () => {
  const data = [
    { x: ["Group 1", "Group 2", "Group 3"], y: [2300, 1000, 8500], name: "Sales Target" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [6000, 3900, 1000], name: "Sales Per Rep" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [3700, 7500, 1100], name: "Monthly Sales" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [2100, 8500, 3000], name: "Target" },
    { x: ["Group 1", "Group 2", "Group 3"], y: [500, 8000, 9500], name: "Cash" }
  ];

  return (
    <HvBarchart
      stack
      title="Stacked Vertical Bar Chart"
      subtitle="Sales performance (YTD)"
      data={data}
      xAxisTitle="Thousands of Dollars ($)"
      yAxisTitle="Axis description"
    />
  );
};

StackedVerticalBarchart.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample that shows the ability to stack bars."
    }
  }
};

export const SimpleHorizontalBarchart = () => (
  <HvBarchart
    horizontal
    title="Simple Horizontal Bar Chart"
    subtitle="Sales performance (YTD)"
    xAxisTitle="Thousands of Dollars ($)"
    yAxisTitle="2018"
    data={[
      {
        x: [2300, 1000, 8500],
        y: ["January", "February", "March"],
        name: "Sales Target"
      }
    ]}
  />
);

SimpleHorizontalBarchart.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample oriented horizontally."
    }
  }
};

export const HorizontalBarchartWithSingleTooltip = () => (
  <HvBarchart
    horizontal
    title="Simple Horizontal Bar Chart"
    subtitle="Sales performance (YTD)"
    tooltipType="single"
    xAxisTitle="Thousands of Dollars ($)"
    yAxisTitle="2018"
    data={[
      {
        x: [2300, 1000, 8500],
        y: ["January", "February", "March"],
        name: "Sales Target"
      }
    ]}
  />
);

HorizontalBarchartWithSingleTooltip.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample oriented horizontally."
    }
  }
};

export const GroupedHorizontalBarchart = () => {
  const data = [
    { y: ["Group 1", "Group 2", "Group 3"], x: [2300, 1000, 8500], name: "Sales Target" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [6000, 3900, 1000], name: "Sales Per Rep" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [3700, 7500, 1100], name: "Monthly Sales" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [2100, 8500, 3000], name: "Target" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [500, 8000, 9500], name: "Cash" }
  ];

  return (
    <HvBarchart
      horizontal
      title="Grouped Horizontal Bar Chart"
      subtitle="Sales performance (YTD)"
      data={data}
      xAxisTitle="Thousands of Dollars ($)"
      yAxisTitle="Axis description"
    />
  );
};

GroupedHorizontalBarchart.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample that shows the ability to group bars."
    }
  }
};

export const StackedHorizontalBarchart = () => {
  const data = [
    { y: ["Group 1", "Group 2", "Group 3"], x: [2300, 1000, 8500], name: "Sales Target" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [6000, 3900, 1000], name: "Sales Per Rep" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [3700, 7500, 1100], name: "Monthly Sales" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [2100, 8500, 3000], name: "Target" },
    { y: ["Group 1", "Group 2", "Group 3"], x: [500, 8000, 9500], name: "Cash" }
  ];

  return (
    <HvBarchart
      stack
      title="Stacked Horizontal Bar Chart"
      subtitle="Sales performance (YTD)"
      data={data}
      horizontal
      xAxisTitle="Thousands of Dollars ($)"
      yAxisTitle="Axis description"
    />
  );
};

StackedHorizontalBarchart.story = {
  parameters: {
    docs: {
      inlineStories: false,
      storyDescription: "Barchart sample that shows the ability to stack bars."
    }
  }
};