import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SmoothieChart, TimeSeries } from 'smoothie/smoothie.js'

interface SmoothieProps {
  className?: string;
  id: string;
  updateSpeed: number;
  maxValue: number;
  minValue: number;
  yLimits: number[];
};

const USmoothieGraph: React.FC<SmoothieProps> = ( props ) => {
  const [ series ] = useState<TimeSeries>(new TimeSeries())
  const [ dataInterval, updateDataInterval ] = useState<number>(0)
  useEffect(() => {
    var smoothieChart = new SmoothieChart({ grid: { fillStyle: '#rgb(0, 0, 0)', strokeStyle: 'rgba(126, 245, 119, 0.2)', sharpLines: true, verticalSections: 6, borderVisible: false },
                                            labels: { fillStyle: '#FFF', fontSize: 14, precision: 0 }, minValue: props.yLimits[0], maxValue: props.yLimits[1]});
    smoothieChart.addTimeSeries(series, { lineWidth: 2, strokeStyle: '#F20' });
    const canvas = document.getElementById(props.id) as HTMLCanvasElement;
    if (canvas !== null) {
      smoothieChart.streamTo(canvas, props.updateSpeed * 2);
    }
  }, [])

  useEffect(() => {
    clearInterval(dataInterval);
    updateDataInterval(setInterval(function() {
                        addDataPoint();
                      }, props.updateSpeed))
  }, [props.maxValue, props.minValue, props.updateSpeed])

  function addDataPoint() {
      let newValue = (Math.random() * (props.maxValue - props.minValue) + props.minValue);
      series.append(Date.now(), newValue);
      const readout = document.querySelector(`#${props.id}-readout`) as HTMLHeadingElement;
      console.log(series)
      if (series.data.length > 2) {
        readout.innerHTML = series.data[series.data.length-2][1].toFixed(1).toString() + " °C";
      }
  }

  return(
    <div className={props.className}>
      <h3 id={props.id + "-readout"}>0 °C</h3>
      <canvas id={props.id} width="300" height="100"></canvas>
    </div>
  )
};

export const SmoothieGraph = styled(USmoothieGraph)`
  h3 {
    font-size: 1.2rem;
    color: #7EF56E;
    text-align: right;
  }
`;