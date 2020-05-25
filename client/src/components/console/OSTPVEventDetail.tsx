import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { selectedEvent, OptionType } from './customTypes'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select, { ValueType, ActionMeta } from 'react-select';
import socket from '../Socket';
import moment from 'moment';

interface AppProps {
  className?: string;
  event: selectedEvent;
  lobbyID: string;
  closeFunction: () => void;
};

const options: OptionType[] = [
  { value: 'scheduled', label: 'Scheduled'},
  { value: 'completed', label: 'Completed'},
  { value: 'sequenced1', label: 'Sequenced 1'},
  { value: 'sequenced2', label: 'Sequenced 2'},
  { value: 'sequenced3', label: 'Sequenced 3'},
  { value: 'active', label: 'Active'}
]

const UOSTPVEventDetail: React.FC<AppProps> = ( props ) => {
  function updateEventStatus(selectedStatus: ValueType<OptionType>, actionMeta: ActionMeta) {
    var newValue = selectedStatus as OptionType;
    socket.emit('UPDATE_EVENT_STATUS', actionMeta.name, props.event.title, props.event.extendedProps.astronaut, newValue.value);
  }
  return(
    <div className={props.className}>
      { props.event.id !== -1 && 
        <div key={props.event.id}>
          <p className="event-time"><small>{`${moment.utc(props.event.start).format('DDDD/HH:mm')} - ${moment.utc(props.event.end).format('DDDD/HH:mm')}`}</small></p>
          <h3 className="event-target">
            {`${props.event.extendedProps.astronaut} - ${props.event.title.substring(2)}`}
          </h3>
          <p className="event-procedure">Procedure: {props.event.extendedProps.procedure}</p>
          <p className="event-location">Location: {props.event.extendedProps.location}</p>
          <Select name={props.event.id.toString()} options={options} onChange={(newValue: ValueType<OptionType>, actionMeta) => {updateEventStatus(newValue, actionMeta)}} value={options.filter((status) => status.value === props.event.classNames.filter((className) => { return className !== 'time-critical' })[0])[0]}/>
        </div>
      }
    </div>
  );
}

export const OSTPVEventDetail = styled(UOSTPVEventDetail)`
  .event-time {
    margin-bottom: 3px;
  }
  .event-target {
    display: inline;
  }
  .event-procedure, .event-location {
    margin-top: 10px;
  }
`;