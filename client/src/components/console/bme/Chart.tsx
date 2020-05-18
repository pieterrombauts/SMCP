import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { render } from '@testing-library/react';
import { interpolateGreens } from 'd3';

interface ChartProps {
  className?: string;
};

const chartData = {
  datasets: [
    {
      data: [1, 6, 1, 5],
      backgroundColor: 'white',
      borderColor: 'red',
      borderWidth: 2,
      fill: false,
    }
  ]

}

const UChart: React.FC<ChartProps> = (props) => {

  return (
    <div className="chart">
      <Line
        data={chartData}
        width={200}
        height={90}

        options={{
          title: {
            display: false
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            },
            line: {
              tension: 0
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'rgba(171,171,171,1)',
                lineWidth: 1
              },
              type: 'time',
              time: {
                unit: 'hour'
              }
            }],
            yAxes: [{
              gridLines: {
                color: 'rgba(171,171,171,1)',
                lineWidth: 1
              }
            }]
          },
          bezierCurve: false,
          mainAspectRation: false,
          responsive: true,

        }}
      />
    </div>

  )




};

export const Chart = styled(UChart)`
  width: 100%;
  height: 100%;
  position: absolute;
  
`;