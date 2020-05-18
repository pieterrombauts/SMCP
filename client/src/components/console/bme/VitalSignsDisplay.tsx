import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Astronaut1 from './Astronaut1';
import Astronaut2 from './Astronaut2'
import Astronaut3 from './Astronaut3'
import Astronaut4 from './Astronaut4'
import { generateRandVal } from '../../../dataGenerator';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
import { decreaseSystolic } from '../../../bloodPressureSystolic';
import { increaseDiastolic } from '../../../bloodPressureDiastolic';
import { Chart } from './Chart';
// import bme_1 from "./../../media/Bme_1.png"
// import bme_2 from "./../../media/Bme_2.png"

interface VSDProps {
    className?: string;
};

const ts1 = new TimeSeries({});
const ts2 = new TimeSeries({});
const ts3 = new TimeSeries({});
const ts4 = new TimeSeries({});

const defaultValues = {
    astronaut1: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 125,
        bloodPressureDiastolic: 60,
        temperature: 0
    },

    astronaut2: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 125,
        bloodPressureDiastolic: 60,
        temperature: 0
    },

    astronaut3: {
        heartRate: 0,
        heartRateMax: 0,
        temperature: 0
    },

    astronaut4: {
        heartRate: 0,
        heartRateMax: 0,
        temperature: 0
    }
}


const UVitalSignsDisplay: React.FC<VSDProps> = (props) => {
    var [values, setValues] = useState(defaultValues)
    const intervalRef = useRef(0);

    useEffect(() => {
        if (intervalRef.current !== 0) {
            clearInterval(intervalRef.current);
        }
        const id = setInterval(() => {
            var newValues = {
                astronaut1: {
                    heartRate: generateRandVal(60, 90).toFixed(0),
                    heartRateMax: 91,
                    bloodPressureSystolic: parseFloat(decreaseSystolic(values.astronaut1.bloodPressureSystolic).toFixed(2)),
                    bloodPressureDiastolic: parseFloat(increaseDiastolic(values.astronaut1.bloodPressureDiastolic).toFixed(2)),
                    temperature: generateRandVal(36.5, 37.5).toFixed(1)
                },

                astronaut2: {
                    heartRate: generateRandVal(60, 90).toFixed(0),
                    heartRateMax: 91,
                    bloodPressureSystolic: parseFloat(decreaseSystolic(values.astronaut2.bloodPressureSystolic).toFixed(2)),
                    bloodPressureDiastolic: parseFloat(increaseDiastolic(values.astronaut2.bloodPressureDiastolic).toFixed(2)),
                    temperature: generateRandVal(36.5, 37.5).toFixed(1)
                },

                astronaut3: {
                    heartRate: generateRandVal(60, 80).toFixed(0),
                    heartRateMax: 91,
                    temperature: generateRandVal(36.5, 37.5).toFixed(1)
                },

                astronaut4: {
                    heartRate: generateRandVal(60, 80).toFixed(0),
                    heartRateMax: 91,
                    temperature: generateRandVal(36.5, 37.5).toFixed(1)
                },

            }
            setValues(values = newValues);

            setInterval(function() {
                var time = new Date().getTime();
               
                ts1.append(time, values.astronaut1.temperature);
                ts2.append(time, values.astronaut2.temperature);
                ts3.append(time, values.astronaut3.temperature);
                ts4.append(time, values.astronaut4.temperature);
              }, 5000);

        }, 5000);
        intervalRef.current = id;
    }, [])

    return (

        <div className={props.className}>
            <div id="chart1-div">
                <Chart />
            </div>

            <div id="chart2-div">
                <Chart />
            </div>

            <div id="chart3-div">
                <Chart />
            </div>

            <div id="chart4-div">
                <Chart />
            </div>
           
            <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1400 1000'>
                <Astronaut1 values={values} />
                <Astronaut2 values={values} />
                <Astronaut3 values={values} />
                <Astronaut4 values={values} />
            </svg>
        </div>
    );
}

export const VitalSignsDisplay = styled(UVitalSignsDisplay)`
  width: 100%;
  height: 100%;
  position: absolute;

  #chart1-div{ 
    position: absolute;
    height: 125px;
    width: 3000px;
    top: 34%;
    left: 22%;
    background-color: black;

  }

  #chart1-div{ 
    position: absolute;
    height: 125px;
    width: 300px;
    top: 34%;
    left: 22%;
    background-color: black;

  }
  

  #chart2-div{ 
    position: absolute;
    height: 125px;
    width: 300px;
    background-color: black;
    top: 34%;
    left: 72%;
    

  }

  #chart3-div{ 
    position: absolute;
    height: 125px;
    width: 300px;
    
    background-color: black;
    top: 81.5%;
    left: 22%;

  }

  #chart4-div{ 
    position: absolute;
    height: 125px;
    width: 300px;
    background-color: black;
    top: 81.5%;
    left: 72%;

  }

`;