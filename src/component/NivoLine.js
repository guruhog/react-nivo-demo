import { render } from "react-dom";
import { ResponsiveLine } from "@nivo/line";
import MyData from "./MyData.json";

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

import React from "react";

class NivoLine extends React.Component {
  render() {
    return (
      <div style={{ height: "15em", width: "40em" }}>
        <ResponsiveLine
          data={MyData}
          curve="cardinal"
          enableGridX={false}
          enableGridY={false}
          enableArea={true}
          axisLeft={false}
          margin={{
            top: 10,
            right: 10,
            bottom: 45,
            left: 60
          }}
          xScale={{
            type: "point"
          }}
          yScale={{
            type: "linear",
            stacked: false,
            min: 0,
            max: "auto"
          }}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Demand 2018",
            legendOffset: 50,
            legendPosition: "middle"
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          markers={[
            {
              axis: "x",
              value: "Mar-18",
              lineStyle: { stroke: "#b0413e", strokeWidth: 2 }
            }
          ]}
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 40,
              translateY: -40,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default NivoLine;
