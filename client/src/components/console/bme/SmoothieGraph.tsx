// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { SmoothieChart, TimeSeries } from 'smoothie/smoothie.js'

// interface SmoothieProps {
//   className?: string;
//   updateSpeed: number;
//   maxValue: number;
//   minValue: number;
//   yLimits: number[];
// };

// const USmoothieGraph: React.FC<SmoothieProps> = ( props ) => {
//   const [ series ] = useState<TimeSeries>(new TimeSeries())
//   const [ dataInterval, updateDataInterval ] = useState<number>(0)
//   useEffect(() => {
//     var powerGenChart = new SmoothieChart({ grid: { fillStyle: '#F8F9FA', strokeStyle: 'rgba(119, 119, 119, 0.3)', sharpLines: true, verticalSections: 6, borderVisible: false },
//                                             labels: { fillStyle: '#000', fontSize: 14, precision: 0 }, minValue: props.yLimits[0], maxValue: props.yLimits[1]});
//     powerGenChart.addTimeSeries(series, { lineWidth: 2, strokeStyle: '#000' });
//     const canvas = document.getElementById("power-generation-chart") as HTMLCanvasElement;
//     if (canvas !== null) {
//       powerGenChart.streamTo(canvas, props.updateSpeed * 2);
//     }
//   }, [])

//   useEffect(() => {
//     clearInterval(dataInterval);
//     updateDataInterval(setInterval(function() {
//                         addDataPoint();
//                       }, props.updateSpeed))
//   }, [props.maxValue, props.minValue, props.updateSpeed])

//   function addDataPoint() {
//       let newValue = (Math.random() * (props.maxValue - props.minValue) + props.minValue);
//       series.append(Date.now(), newValue);
//       const readout = document.querySelector("#power-generation-readout") as HTMLHeadingElement;
//       if (series.data.length > 2) {
//         readout.innerHTML = series.data[series.data.length-2][1].toFixed(1).toString() + " kW";
//       }
//   }

//   return(
//     <div id="power-generation" className={props.className}>
//       <h3>Power Generation</h3>
//       <div id="power-generation-border">
//         <canvas id="power-generation-chart" width="620" height="222"></canvas>
//         <h2 id="power-generation-readout"></h2>
//       </div>
//     </div>
//   )
// };

// export const SmoothieGraph = styled(USmoothieGraph)`  
//   h3 {
//     color: #f8f9fa;
//     margin-left: 15px; 
//   }
  
//   #power-generation-border {
//     border: 2px solid #f8f9fa;
//     border-radius: 3px;
//     background-color: rgba(248, 249, 250, 1);
//     height: 226px;
//   }

//   #power-generation-readout {
//     position: relative;
//     bottom: 45px;
//     left: 5px;
//   }
// `;