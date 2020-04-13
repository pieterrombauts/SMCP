import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import '@fullcalendar/core/main.css';
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css';

interface AppProps {
  className?: string;
};

const UOSTPV: React.FC<AppProps> = ( props ) => {
  return(
    <div className={props.className}>
      <FullCalendar
        nowIndicator
        now='2019-11-19T09:00:00'
        eventClick={(info) => { alert(info.event.title) } }
        height={482}
        header={{left: '', center: '', right: ''}}
        resourceLabelText=' '
        resourceAreaWidth={180}
        defaultView='resourceTimeline' 
        plugins={[resourceTimelinePlugin]}
        schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
        slotLabelInterval='00:30:00'
        slotDuration='00:15:00'
        slotWidth={50}
        resources={[{id: 'ku', title: 'ALL KU AVAILABILITY'}, 
                    {id: 's', title: 'ALL S AVAILABILITY'}, 
                    {id: 'dn', title: 'DAY/NIGHT'}, 
                    {id: 'do', title: 'DailyOrbit'}, 
                    {id: 'astro1', title: 'ASTRO 1'},
                    {id: 'astro2', title: 'ASTRO 2'},
                    {id: 'astro3', title: 'ASTRO 3'},
                    {id: 'astro4', title: 'ASTRO 4'}]}
        events={[
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-19T06:00:00', end: '2019-11-19T06:40:00', color: '#000', borderColor: '#000'},
             {id: 2, resourceId: 'dn', title: '', start: '2019-11-19T06:40:00', end: '2019-11-19T07:40:00', color: '#FFF', borderColor: '#AAA'},
             {id: 3, resourceId: 'dn', title: '', start: '2019-11-19T07:40:00', end: '2019-11-19T08:20:00', color: '#000', borderColor: '#000'},
             {id: 4, resourceId: 'dn', title: '', start: '2019-11-19T08:20:00', end: '2019-11-19T09:20:00', color: '#FFF', borderColor: '#AAA'},
             {id: 5, resourceId: 'dn', title: '', start: '2019-11-19T09:20:00', end: '2019-11-19T10:00:00', color: '#000', borderColor: '#000'},
             {id: 6, resourceId: 'dn', title: '', start: '2019-11-19T10:00:00', end: '2019-11-19T11:00:00', color: '#FFF', borderColor: '#AAA'},
             {id: 7, resourceId: 'dn', title: '', start: '2019-11-19T11:00:00', end: '2019-11-19T11:40:00', color: '#000', borderColor: '#000'},
             {id: 8, resourceId: 'dn', title: '', start: '2019-11-19T11:40:00', end: '2019-11-19T12:40:00', color: '#FFF', borderColor: '#AAA'},
             {id: 9, resourceId: 'dn', title: '', start: '2019-11-19T12:40:00', end: '2019-11-19T13:20:00', color: '#000', borderColor: '#000'},
             {id: 10, resourceId: 'dn', title: '', start: '2019-11-19T13:20:00', end: '2019-11-19T14:20:00', color: '#FFF', borderColor: '#AAA'},
             {id: 11, resourceId: 'dn', title: '', start: '2019-11-19T14:20:00', end: '2019-11-19T15:00:00', color: '#000', borderColor: '#000'},
             {id: 12, resourceId: 'dn', title: '', start: '2019-11-19T15:00:00', end: '2019-11-19T16:00:00', color: '#FFF', borderColor: '#AAA'},
             {id: 13, resourceId: 'dn', title: '', start: '2019-11-19T16:00:00', end: '2019-11-19T16:40:00', color: '#000', borderColor: '#000'},
             
             {id: 14, resourceId: 'do', title: '5', start: '2019-11-19T06:00:00', end: '2019-11-19T07:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             {id: 15, resourceId: 'do', title: '6', start: '2019-11-19T07:30:00', end: '2019-11-19T09:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             {id: 16, resourceId: 'do', title: '7', start: '2019-11-19T09:00:00', end: '2019-11-19T10:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             {id: 17, resourceId: 'do', title: '8', start: '2019-11-19T10:30:00', end: '2019-11-19T12:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             {id: 18, resourceId: 'do', title: '9', start: '2019-11-19T12:00:00', end: '2019-11-19T13:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             {id: 19, resourceId: 'do', title: '10', start: '2019-11-19T13:30:00', end: '2019-11-19T15:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             {id: 20, resourceId: 'do', title: '11', start: '2019-11-19T15:00:00', end: '2019-11-19T16:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
             
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T06:00:00', end: '2019-11-19T06:45:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T07:00:00', end: '2019-11-19T07:03:30', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T07:05:00', end: '2019-11-19T07:40:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T07:40:30', end: '2019-11-19T08:20:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T08:21:00', end: '2019-11-19T08:22:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T08:40:30', end: '2019-11-19T09:25:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T09:25:30', end: '2019-11-19T10:10:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T10:20:30', end: '2019-11-19T11:00:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T11:00:30', end: '2019-11-19T11:35:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T11:36:00', end: '2019-11-19T11:41:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T12:00:00', end: '2019-11-19T12:35:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T12:35:30', end: '2019-11-19T13:20:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T13:23:00', end: '2019-11-19T13:28:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T13:32:00', end: '2019-11-19T14:20:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T14:20:30', end: '2019-11-19T15:05:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T15:11:00', end: '2019-11-19T15:56:00', color: '#FF8400', borderColor: '#7B0000'},
             {id: 100, resourceId: 'ku', title: '', start: '2019-11-19T15:56:30', end: '2019-11-19T16:40:00', color: '#FF8400', borderColor: '#7B0000'},
             
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T06:00:00', end: '2019-11-19T06:37:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T06:44:00', end: '2019-11-19T06:45:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T07:00:00', end: '2019-11-19T07:40:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T07:40:30', end: '2019-11-19T08:10:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T08:35:00', end: '2019-11-19T09:25:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T09:25:30', end: '2019-11-19T10:00:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T10:07:30', end: '2019-11-19T10:08:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T10:18:30', end: '2019-11-19T11:00:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T11:00:00', end: '2019-11-19T11:36:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T11:50:30', end: '2019-11-19T12:35:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T12:35:30', end: '2019-11-19T13:28:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T13:30:30', end: '2019-11-19T14:20:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T14:20:30', end: '2019-11-19T14:59:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T15:08:30', end: '2019-11-19T15:56:00', color: '#00FF00', borderColor: '#007B00'},
             {id: 100, resourceId: 's', title: '', start: '2019-11-19T15:56:30', end: '2019-11-19T16:40:00', color: '#00FF00', borderColor: '#007B00'},
             
             {id: 200, resourceId: 'astro1', title: '● post-sleep', start: '2019-11-19T06:00:00', end: '2019-11-19T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro2', title: '● post-sleep', start: '2019-11-19T06:00:00', end: '2019-11-19T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro3', title: '● post-sleep', start: '2019-11-19T06:00:00', end: '2019-11-19T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro4', title: '● post-sleep', start: '2019-11-19T06:00:00', end: '2019-11-19T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro1', title: '● morning-prep', start: '2019-11-19T07:30:00', end: '2019-11-19T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro2', title: '● morning-prep', start: '2019-11-19T07:30:00', end: '2019-11-19T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro3', title: '● morning-prep', start: '2019-11-19T07:30:00', end: '2019-11-19T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro4', title: '● morning-prep', start: '2019-11-19T07:30:00', end: '2019-11-19T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro2', title: '● exercise-ared', start: '2019-11-19T08:20:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro1', title: '● midday-meal', start: '2019-11-19T09:25:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 201, resourceId: 'astro2', title: '● midday-meal', start: '2019-11-19T09:25:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro3', title: '● midday-meal', start: '2019-11-19T09:25:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 201, resourceId: 'astro4', title: '● midday-meal', start: '2019-11-19T09:25:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro1', title: '● browse-reddit', start: '2019-11-19T11:25:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 201, resourceId: 'astro2', title: '● browse-reddit', start: '2019-11-19T12:35:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 200, resourceId: 'astro3', title: '● moon-walk', start: '2019-11-19T10:45:00', end: '2019-11-19T13:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
             {id: 201, resourceId: 'astro4', title: '● moon-walk', start: '2019-11-19T10:45:00', end: '2019-11-19T13:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'}
        ]}
      />
    </div>
  );
}

export const OSTPV = styled(UOSTPV)`
  tr[data-resource-id=ku] div, tr[data-resource-id=s] div, tr[data-resource-id=dn] div, tr[data-resource-id=do] div {
    height: 25px !important;
  }
  tr[data-resource-id=ku] div, tr[data-resource-id=s] div, tr[data-resource-id=dn] div, tr[data-resource-id=do] .fc-cell-content {
    padding: 0px !important;
  }
  tr[data-resource-id=astro1], tr[data-resource-id=astro2], tr[data-resource-id=astro3], tr[data-resource-id=astro4] {
    height: 75px;
  }
  tr[data-resource-id=astro1] > td, tr[data-resource-id=astro2] > td, tr[data-resource-id=astro3] > td, tr[data-resource-id=astro4] > td {
    vertical-align: middle;
  }
  tr[data-resource-id=astro1] .fc-event, tr[data-resource-id=astro2] .fc-event, tr[data-resource-id=astro3] .fc-event, tr[data-resource-id=astro4] .fc-event {
    height: 60px;
  }
`;