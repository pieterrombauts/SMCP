import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Astronaut1 from './Astronaut1';
import Astronaut2 from './Astronaut2'
import Astronaut3 from './Astronaut3'
import Astronaut4 from './Astronaut4'
import { generateRandVal } from '../../../dataGenerator';
import SmoothieComponent, { TimeSeries } from 'react-smoothie';
// import bme_1 from "./../../media/Bme_1.png"
// import bme_2 from "./../../media/Bme_2.png"

interface VSDProps {
    className?: string;
};

const defaultValues = {
    astronaut1: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 0,
        bloodPressureDiastolic: 0,
        temperature: 0
    },

    astronaut2: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 0,
        bloodPressureDiastolic: 0,
        temperature: 0
    },

    astronaut3: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 0,
        bloodPressureDiastolic: 0,
        temperature: 0
    },

    astronaut4: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 0,
        bloodPressureDiastolic: 0,
        temperature: 0
    }
}

const ts1 = new TimeSeries({});

setInterval(function () {
    var time = new Date().getTime();

    ts1.append(time, Math.random());
}, 500);

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
                    heartRate: generateRandVal(60, 80).toFixed(2),
                    heartRateMax: 91,
                    bloodPressureSystolic: generateRandVal(60, 80).toFixed(2),
                    bloodPressureDiastolic: generateRandVal(60, 80).toFixed(2),
                    temperature: generateRandVal(30, 45).toFixed(2)
                },

                astronaut2: {
                    heartRate: generateRandVal(60, 80).toFixed(2),
                    heartRateMax: 91,
                    bloodPressureSystolic: generateRandVal(60, 80).toFixed(2),
                    bloodPressureDiastolic: generateRandVal(60, 80).toFixed(2),
                    temperature: generateRandVal(30, 45).toFixed(2)
                },

                astronaut3: {
                    heartRate: generateRandVal(60, 80).toFixed(2),
                    heartRateMax: 91,
                    bloodPressureSystolic: generateRandVal(60, 80).toFixed(2),
                    bloodPressureDiastolic: generateRandVal(60, 80).toFixed(2),
                    temperature: generateRandVal(30, 45).toFixed(2)
                },

                astronaut4: {
                    heartRate: generateRandVal(60, 80).toFixed(2),
                    heartRateMax: 91,
                    bloodPressureSystolic: generateRandVal(60, 80).toFixed(2),
                    bloodPressureDiastolic: generateRandVal(60, 80).toFixed(2),
                    temperature: generateRandVal(30, 45).toFixed(2)
                },

            }
            setValues(newValues);
        }, 5000);
        intervalRef.current = id;
    }, [])
    return (

        <div id="smoothie-div"className={props.className}>
            {/* <SmoothieComponent height={100} width={300} series={[
                    {
                        data: ts1,
                        strokeStyle: { r: 255 },
                        fillStyle: { r: 255 },
                        lineWidth: 1,
                    }
                ]}
            /> */}
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

`;