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
        now='2019-11-15T15:30:00'
        eventClick={(info) => { alert(info.event.title) } }
        height={634}
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
                    {id: 'astro1', title: 'ISS CDR'},
                    {id: 'astro2', title: 'FE-1'},
                    {id: 'astro3', title: 'FE-2'},
                    {id: 'astro4', title: 'FE-3'},
                    {id: 'astro5', title: 'FE-4'},
                    {id: 'astro6', title: 'FE-5'}]}
        events={[
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T00:30:00', end: '2019-11-15T01:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T01:30:00', end: '2019-11-15T02:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T02:00:00', end: '2019-11-15T03:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T03:00:00', end: '2019-11-15T03:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T03:30:00', end: '2019-11-15T04:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T04:30:00', end: '2019-11-15T05:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T05:00:00', end: '2019-11-15T06:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T06:00:00', end: '2019-11-15T06:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T06:30:00', end: '2019-11-15T07:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T08:00:00', end: '2019-11-15T09:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T09:00:00', end: '2019-11-15T09:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T09:30:00', end: '2019-11-15T10:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T10:30:00', end: '2019-11-15T11:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T11:00:00', end: '2019-11-15T12:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T12:00:00', end: '2019-11-15T12:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T12:30:00', end: '2019-11-15T13:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T13:30:00', end: '2019-11-15T14:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T14:00:00', end: '2019-11-15T15:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T15:00:00', end: '2019-11-15T15:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T15:30:00', end: '2019-11-15T16:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T16:30:00', end: '2019-11-15T17:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T17:00:00', end: '2019-11-15T18:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T18:00:00', end: '2019-11-15T18:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T18:30:00', end: '2019-11-15T19:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T19:30:00', end: '2019-11-15T20:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T20:00:00', end: '2019-11-15T21:00:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T21:00:00', end: '2019-11-15T21:30:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T21:30:00', end: '2019-11-15T22:30:00', color: '#FFF', borderColor: '#AAA'},
          {id: 1, resourceId: 'dn', title: '', start: '2019-11-15T22:30:00', end: '2019-11-15T23:00:00', color: '#000', borderColor: '#000'},
          {id: 2, resourceId: 'dn', title: '', start: '2019-11-15T23:00:00', end: '2019-11-15T24:00:00', color: '#FFF', borderColor: '#AAA'},
          
          {id: 14, resourceId: 'do', title: '1', start: '2019-11-15T00:00:00', end: '2019-11-15T01:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 15, resourceId: 'do', title: '2', start: '2019-11-15T01:30:00', end: '2019-11-15T03:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 16, resourceId: 'do', title: '3', start: '2019-11-15T03:00:00', end: '2019-11-15T04:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 17, resourceId: 'do', title: '4', start: '2019-11-15T04:30:00', end: '2019-11-15T06:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 14, resourceId: 'do', title: '5', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 15, resourceId: 'do', title: '6', start: '2019-11-15T07:30:00', end: '2019-11-15T09:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 16, resourceId: 'do', title: '7', start: '2019-11-15T09:00:00', end: '2019-11-15T10:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 17, resourceId: 'do', title: '8', start: '2019-11-15T10:30:00', end: '2019-11-15T12:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 18, resourceId: 'do', title: '9', start: '2019-11-15T12:00:00', end: '2019-11-15T13:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 19, resourceId: 'do', title: '10', start: '2019-11-15T13:30:00', end: '2019-11-15T15:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 20, resourceId: 'do', title: '11', start: '2019-11-15T15:00:00', end: '2019-11-15T16:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 15, resourceId: 'do', title: '12', start: '2019-11-15T16:30:00', end: '2019-11-15T18:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 16, resourceId: 'do', title: '13', start: '2019-11-15T18:00:00', end: '2019-11-15T19:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 17, resourceId: 'do', title: '14', start: '2019-11-15T19:30:00', end: '2019-11-15T21:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 18, resourceId: 'do', title: '15', start: '2019-11-15T21:00:00', end: '2019-11-15T22:30:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},
          {id: 19, resourceId: 'do', title: '16', start: '2019-11-15T22:30:00', end: '2019-11-15T24:00:00', color: '#FFF', borderColor: '#AAA', textColor: '#000'},

          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:45:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T01:00:00', end: '2019-11-15T01:03:30', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T01:05:00', end: '2019-11-15T01:40:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T01:40:30', end: '2019-11-15T02:20:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T02:21:00', end: '2019-11-15T02:22:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T02:40:30', end: '2019-11-15T03:25:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T03:25:30', end: '2019-11-15T04:10:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T04:20:30', end: '2019-11-15T05:00:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T05:00:30', end: '2019-11-15T05:35:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T05:36:00', end: '2019-11-15T05:41:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T06:00:00', end: '2019-11-15T06:35:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T06:35:30', end: '2019-11-15T07:20:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T07:23:00', end: '2019-11-15T07:28:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T07:32:00', end: '2019-11-15T08:20:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T08:20:30', end: '2019-11-15T09:05:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T09:11:00', end: '2019-11-15T09:56:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T09:56:30', end: '2019-11-15T10:40:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T10:42:00', end: '2019-11-15T11:36:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T11:39:00', end: '2019-11-15T11:53:30', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T12:12:00', end: '2019-11-15T12:52:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T13:01:30', end: '2019-11-15T14:16:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T14:25:00', end: '2019-11-15T15:24:00', color: '#FF8400', borderColor: '#7B0000'},

          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T15:30:00', end: '2019-11-15T15:47:37', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T15:47:52', end: '2019-11-15T16:27:51', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T16:29:28', end: '2019-11-15T16:33:53', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T16:35:46', end: '2019-11-15T16:37:03', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T16:39:19', end: '2019-11-15T16:40:10', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T16:42:07', end: '2019-11-15T16:43:24', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T16:44:25', end: '2019-11-15T17:22:26', color: '#FF8400', borderColor: '#7B0000'},

          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T17:25:30', end: '2019-11-15T18:10:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T18:20:30', end: '2019-11-15T19:00:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T19:00:30', end: '2019-11-15T19:35:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T19:36:00', end: '2019-11-15T19:41:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T20:00:00', end: '2019-11-15T20:35:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T20:35:30', end: '2019-11-15T21:20:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T21:23:00', end: '2019-11-15T21:28:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T21:32:00', end: '2019-11-15T22:20:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T22:20:30', end: '2019-11-15T23:05:00', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T23:06:00', end: '2019-11-15T23:07:30', color: '#FF8400', borderColor: '#7B0000'},
          {id: 100, resourceId: 'ku', title: '', start: '2019-11-15T23:11:30', end: '2019-11-15T23:57:00', color: '#FF8400', borderColor: '#7B0000'},
          
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:37:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T00:44:00', end: '2019-11-15T00:45:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T01:00:00', end: '2019-11-15T01:40:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T01:40:30', end: '2019-11-15T02:10:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T02:35:00', end: '2019-11-15T03:25:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T03:25:30', end: '2019-11-15T04:00:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T04:07:30', end: '2019-11-15T04:08:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T04:18:30', end: '2019-11-15T05:00:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T05:00:00', end: '2019-11-15T05:36:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T05:50:30', end: '2019-11-15T06:35:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T06:35:30', end: '2019-11-15T07:28:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T07:30:30', end: '2019-11-15T08:20:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T08:20:30', end: '2019-11-15T08:59:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T09:08:30', end: '2019-11-15T09:56:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T09:56:30', end: '2019-11-15T10:40:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T10:44:00', end: '2019-11-15T11:26:30', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T11:28:00', end: '2019-11-15T12:07:00', color: '#00FF00', borderColor: '#007B00'},


          {id: 100, resourceId: 's', title: '', start: '2019-11-15T12:11:00', end: '2019-11-15T15:47:37', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T15:47:52', end: '2019-11-15T16:27:51', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T16:29:28', end: '2019-11-15T16:33:53', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T16:35:46', end: '2019-11-15T16:37:03', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T16:39:19', end: '2019-11-15T16:40:10', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T16:42:07', end: '2019-11-15T16:43:24', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T16:44:25', end: '2019-11-15T16:59:26', color: '#00FF00', borderColor: '#007B00'},

          {id: 100, resourceId: 's', title: '', start: '2019-11-15T17:00:00', end: '2019-11-15T17:37:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T17:44:00', end: '2019-11-15T17:45:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T18:00:00', end: '2019-11-15T18:40:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T18:40:30', end: '2019-11-15T19:10:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T19:35:00', end: '2019-11-15T19:25:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T19:25:30', end: '2019-11-15T20:00:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T20:07:30', end: '2019-11-15T20:08:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T20:18:30', end: '2019-11-15T21:00:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T21:02:00', end: '2019-11-15T21:36:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T21:50:30', end: '2019-11-15T22:35:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T22:37:00', end: '2019-11-15T23:11:00', color: '#00FF00', borderColor: '#007B00'},
          {id: 100, resourceId: 's', title: '', start: '2019-11-15T23:11:30', end: '2019-11-15T23:58:00', color: '#00FF00', borderColor: '#007B00'},
          
          {id: 200, resourceId: 'astro1', title: '● sleep', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● sleep', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● sleep', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● sleep', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● sleep', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● sleep', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro1', title: '● post-sleep', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● post-sleep', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● post-sleep', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● post-sleep', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● post-sleep', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● post-sleep', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro1', title: '● morning-prep', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● morning-prep', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● morning-prep', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● morning-prep', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● morning-prep', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● morning-prep', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          
          {id: 200, resourceId: 'astro1', title: '● dpc', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● dpc', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● dpc', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● dpc', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● dpc', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● dpc', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          
          {id: 200, resourceId: 'astro2', title: '● exercise-ared', start: '2019-11-15T08:20:00', end: '2019-11-15T09:50:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● exercise-cevis', start: '2019-11-15T09:50:00', end: '2019-11-15T10:50:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● exercise-ared', start: '2019-11-15T10:20:00', end: '2019-11-15T11:50:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● exercise-cevis', start: '2019-11-15T13:30:00', end: '2019-11-15T14:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro4', title: '● robotics', start: '2019-11-15T08:45:00', end: '2019-11-15T09:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro6', title: '● robotics', start: '2019-11-15T08:45:00', end: '2019-11-15T09:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● eva-support', start: '2019-11-15T10:15:00', end: '2019-11-15T16:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro6', title: '● eva-support', start: '2019-11-15T10:15:00', end: '2019-11-15T16:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro5', title: '● eva-prep', start: '2019-11-15T09:00:00', end: '2019-11-15T10:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro1', title: '● hms-oct subj', start: '2019-11-15T08:15:00', end: '2019-11-15T08:55:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● hms-oct subj', start: '2019-11-15T08:15:00', end: '2019-11-15T08:55:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro5', title: '● hms-oct cmo', start: '2019-11-15T08:15:00', end: '2019-11-15T08:55:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro2', title: '● bass-ops-test', start: '2019-11-15T11:00:00', end: '2019-11-15T12:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro2', title: '● bass-ops-conclude', start: '2019-11-15T13:25:00', end: '2019-11-15T14:55:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro2', title: '● midday-meal', start: '2019-11-15T12:15:00', end: '2019-11-15T13:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro5', title: '● midday-meal', start: '2019-11-15T12:15:00', end: '2019-11-15T13:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro2', title: '● middeck-transfer', start: '2019-11-15T15:00:00', end: '2019-11-15T16:50:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● middeck-transfer', start: '2019-11-15T15:00:00', end: '2019-11-15T16:50:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro1', title: '● eva', start: '2019-11-15T09:15:00', end: '2019-11-15T16:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro3', title: '● eva', start: '2019-11-15T09:15:00', end: '2019-11-15T16:45:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro1', title: '● exercise-ared', start: '2019-11-15T17:00:00', end: '2019-11-15T18:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro1', title: '● exercise-cevis', start: '2019-11-15T19:15:00', end: '2019-11-15T20:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● exercise-cevis', start: '2019-11-15T17:00:00', end: '2019-11-15T18:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● exercise-ared', start: '2019-11-15T18:40:00', end: '2019-11-15T20:15:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro1', title: '● hms-fund subj', start: '2019-11-15T18:30:00', end: '2019-11-15T19:10:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● hms-fund subj', start: '2019-11-15T18:00:00', end: '2019-11-15T18:40:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro5', title: '● hms-fund cmo', start: '2019-11-15T18:00:00', end: '2019-11-15T19:10:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro5', title: '● eva-tool-stow', start: '2019-11-15T17:00:00', end: '2019-11-15T18:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro5', title: '● eva-tool-stow', start: '2019-11-15T19:15:00', end: '2019-11-15T20:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro2', title: '● obt-38s-emer-drill', start: '2019-11-15T17:00:00', end: '2019-11-15T20:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● obt-38s-emer-drill', start: '2019-11-15T17:00:00', end: '2019-11-15T20:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 201, resourceId: 'astro6', title: '● obt-38s-emer-drill', start: '2019-11-15T17:00:00', end: '2019-11-15T20:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},

          {id: 200, resourceId: 'astro1', title: '● dpc', start: '2019-11-15T20:15:00', end: '2019-11-15T20:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● dpc', start: '2019-11-15T20:15:00', end: '2019-11-15T20:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● dpc', start: '2019-11-15T20:15:00', end: '2019-11-15T20:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● dpc', start: '2019-11-15T20:15:00', end: '2019-11-15T20:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● dpc', start: '2019-11-15T20:15:00', end: '2019-11-15T20:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● dpc', start: '2019-11-15T20:15:00', end: '2019-11-15T20:30:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro1', title: '● pre-sleep', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● pre-sleep', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● pre-sleep', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● pre-sleep', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● pre-sleep', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● pre-sleep', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro1', title: '● sleep', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro2', title: '● sleep', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro3', title: '● sleep', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro4', title: '● sleep', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro5', title: '● sleep', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'},
          {id: 200, resourceId: 'astro6', title: '● sleep', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', textColor: '#FFF', color: '#848c8c', borderColor: '#000'}
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
  tr[data-resource-id=astro1], tr[data-resource-id=astro2], tr[data-resource-id=astro3], tr[data-resource-id=astro4], tr[data-resource-id=astro5], tr[data-resource-id=astro6] {
    height: 75px;
  }
  tr[data-resource-id=astro1] > td, tr[data-resource-id=astro2] > td, tr[data-resource-id=astro3] > td, tr[data-resource-id=astro4] > td, tr[data-resource-id=astro5] > td, tr[data-resource-id=astro6] > td {
    vertical-align: middle;
  }
  tr[data-resource-id=astro1] .fc-event, tr[data-resource-id=astro2] .fc-event, tr[data-resource-id=astro3] .fc-event, tr[data-resource-id=astro4] .fc-event, tr[data-resource-id=astro5] .fc-event, tr[data-resource-id=astro6] .fc-event {
    height: 60px;
  }
`;