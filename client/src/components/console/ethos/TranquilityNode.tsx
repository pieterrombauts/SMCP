import React from 'react';
import { ethosThermalSystemDisplay } from '../customTypes'

interface TranquilityNodeProps {
    origin: number[];
    values: ethosThermalSystemDisplay;
};

const TranquilityNode: React.FC<TranquilityNodeProps> = (props) => {
    var [originX, originY] = props.origin;
    return (
        <g id="ethos-thermal-system-display-density-lab">
            <text x="5%" y="93%" fill="white" font-size="20" font-family="Verdana">Tranquility Node</text>
            <text x="27.25%" y="93%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.tranquilityNode.lowTLoop}</text>
            <text x="48.25%" y="93%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.tranquilityNode.moderateTLoop}</text>
            <text x="67.5%" y="93%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.tranquilityNode.lowTemp}</text>
            <text x="83%" y="93%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.tranquilityNode.moderateTemp}</text>
        </g>
    )
};

export default TranquilityNode;
