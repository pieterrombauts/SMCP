import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import {chartData} from '../customTypes'

interface ChartProps {
  className?: string;
  data: {x: string, y: number};
};

const UChart: React.FC<ChartProps> = (props) => {
  const [chartData, setChartData] = useState<chartData>({
    datasets: [
      {
        data: [
          {x: '2019-11-15T14:55:00', y: 37.2}
        ],
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
      }
    ]
  })
  useEffect(() => {
    setChartData({
      datasets: [
        {
          data: [...chartData.datasets[0].data, props.data],
          backgroundColor: 'white',
          borderColor: 'red',
          borderWidth: 2,
          fill: false
        }
      ]
    })
  }, [props.data])
  return (
    <div className={props.className}>
      <Line
        data={chartData}
        width={200}
        height={90}
        redraw={false}
        options={{
          animation: {
            duration: 0
          },
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
          layout: {
            padding: {
              bottom: 5
            }
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: '#378545',
                lineWidth: 1
              },
              type: 'time',
              ticks: {
                min: '2019-11-15T15:00:00',
                max: '2019-11-15T16:45:00'
              },
              time: {
                unit: 'minute',
                stepSize: 30
              }
            }],
            yAxes: [{
              gridLines: {
                color: '#378545',
                lineWidth: 1
              },
              ticks: {
                min: 35.8,
                max: 37.8,
                stepSize: 0.2
              }
            }]
          },
          bezierCurve: false,
          mainAspectRation: false,
          responsive: true
        }}
      />
    </div>
  )
};

export const Chart = styled(UChart)`
  background-color: black;
  padding: 5px;
`;