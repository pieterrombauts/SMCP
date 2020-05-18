import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import '@fullcalendar/core/main.css';
import '@fullcalendar/timeline/main.css'
import '@fullcalendar/resource-timeline/main.css';
import socket from '../Socket';
import { event, selectedEvent } from './customTypes';
import { OSTPVEventModal } from './OSTPVEventModal'
import { CSSTransition } from 'react-transition-group'
import { animateCSS } from '../../animation'
import moment from 'moment';

interface AppProps {
  className?: string;
  lobbyID: string;
};

const headerEvents = [
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T00:45:00', end: '2019-11-15T01:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T01:30:00', end: '2019-11-15T02:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T02:15:00', end: '2019-11-15T03:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T03:00:00', end: '2019-11-15T03:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T03:45:00', end: '2019-11-15T04:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T04:30:00', end: '2019-11-15T05:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T05:15:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T06:00:00', end: '2019-11-15T06:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T06:45:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T07:30:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T08:15:00', end: '2019-11-15T09:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T09:00:00', end: '2019-11-15T09:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T09:45:00', end: '2019-11-15T10:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T10:30:00', end: '2019-11-15T11:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T11:15:00', end: '2019-11-15T12:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T12:00:00', end: '2019-11-15T12:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T12:45:00', end: '2019-11-15T13:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T13:30:00', end: '2019-11-15T14:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T14:15:00', end: '2019-11-15T15:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T15:00:00', end: '2019-11-15T15:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T15:45:00', end: '2019-11-15T16:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T16:30:00', end: '2019-11-15T17:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T17:15:00', end: '2019-11-15T18:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T18:00:00', end: '2019-11-15T18:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T18:45:00', end: '2019-11-15T19:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T19:30:00', end: '2019-11-15T20:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T20:15:00', end: '2019-11-15T21:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T21:00:00', end: '2019-11-15T21:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T21:45:00', end: '2019-11-15T22:30:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T22:30:00', end: '2019-11-15T23:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA'},
  {id: 1, resourceId: 'dn', astronaut: '', title: '', start: '2019-11-15T23:15:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: [], color: '#000', borderColor: '#000'},

  {id: 2, resourceId: 'do', astronaut: '', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '1', start: '2019-11-15T00:45:00', end: '2019-11-15T02:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '2', start: '2019-11-15T02:15:00', end: '2019-11-15T03:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '3', start: '2019-11-15T03:45:00', end: '2019-11-15T05:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '4', start: '2019-11-15T05:15:00', end: '2019-11-15T06:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '5', start: '2019-11-15T06:45:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '6', start: '2019-11-15T08:15:00', end: '2019-11-15T09:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '7', start: '2019-11-15T09:45:00', end: '2019-11-15T11:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '8', start: '2019-11-15T11:15:00', end: '2019-11-15T12:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '9', start: '2019-11-15T12:45:00', end: '2019-11-15T14:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '10', start: '2019-11-15T14:15:00', end: '2019-11-15T15:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '11', start: '2019-11-15T15:45:00', end: '2019-11-15T17:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '12', start: '2019-11-15T17:15:00', end: '2019-11-15T18:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '13', start: '2019-11-15T18:45:00', end: '2019-11-15T20:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '14', start: '2019-11-15T20:15:00', end: '2019-11-15T21:45:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '15', start: '2019-11-15T21:45:00', end: '2019-11-15T23:15:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},
  {id: 2, resourceId: 'do', astronaut: '', title: '16', start: '2019-11-15T23:15:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: [], color: '#FFF', borderColor: '#AAA', textColor: '#000'},

  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:45:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T01:00:00', end: '2019-11-15T01:03:30', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T01:05:00', end: '2019-11-15T01:40:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T01:40:30', end: '2019-11-15T02:20:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T02:21:00', end: '2019-11-15T02:22:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T02:40:30', end: '2019-11-15T03:25:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T03:25:30', end: '2019-11-15T04:10:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T04:20:30', end: '2019-11-15T05:00:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T05:00:30', end: '2019-11-15T05:35:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T05:36:00', end: '2019-11-15T05:41:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T06:00:00', end: '2019-11-15T06:35:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T06:35:30', end: '2019-11-15T07:20:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T07:23:00', end: '2019-11-15T07:28:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T07:32:00', end: '2019-11-15T08:20:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T08:20:30', end: '2019-11-15T09:05:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T09:11:00', end: '2019-11-15T09:56:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T09:56:30', end: '2019-11-15T10:40:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T10:42:00', end: '2019-11-15T11:36:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T11:39:00', end: '2019-11-15T11:53:30', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T12:12:00', end: '2019-11-15T12:52:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T13:01:30', end: '2019-11-15T14:16:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T14:25:00', end: '2019-11-15T14:54:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},

  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T15:00:00', end: '2019-11-15T15:17:37', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T15:17:52', end: '2019-11-15T15:57:51', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T15:59:28', end: '2019-11-15T16:03:53', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T16:05:46', end: '2019-11-15T16:07:03', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T16:09:19', end: '2019-11-15T16:10:10', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T16:12:07', end: '2019-11-15T16:13:24', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T16:14:25', end: '2019-11-15T16:52:26', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},

  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T16:55:30', end: '2019-11-15T17:23:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T17:25:30', end: '2019-11-15T18:10:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T18:20:30', end: '2019-11-15T19:00:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T19:00:30', end: '2019-11-15T19:35:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T19:36:00', end: '2019-11-15T19:41:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T20:00:00', end: '2019-11-15T20:35:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T20:35:30', end: '2019-11-15T21:20:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T21:23:00', end: '2019-11-15T21:28:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T21:32:00', end: '2019-11-15T22:20:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T22:20:30', end: '2019-11-15T23:05:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T23:06:00', end: '2019-11-15T23:07:30', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},
  {id: 3, resourceId: 'ku', astronaut: '', title: '', start: '2019-11-15T23:11:30', end: '2019-11-15T23:57:00', procedure: '', location: '', classNames: [], color: '#FF8400', borderColor: '#7B0000'},

  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T00:00:00', end: '2019-11-15T00:37:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T00:44:00', end: '2019-11-15T00:45:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T01:00:00', end: '2019-11-15T01:40:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T01:40:30', end: '2019-11-15T02:10:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T02:35:00', end: '2019-11-15T03:25:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T03:25:30', end: '2019-11-15T04:00:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T04:07:30', end: '2019-11-15T04:08:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T04:18:30', end: '2019-11-15T05:00:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T05:00:00', end: '2019-11-15T05:36:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T05:50:30', end: '2019-11-15T06:35:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T06:35:30', end: '2019-11-15T07:28:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T07:30:30', end: '2019-11-15T08:20:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T08:20:30', end: '2019-11-15T08:59:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T09:08:30', end: '2019-11-15T09:56:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T09:56:30', end: '2019-11-15T10:40:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T10:44:00', end: '2019-11-15T11:26:30', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T11:28:00', end: '2019-11-15T12:07:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T12:10:00', end: '2019-11-15T12:52:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T13:01:30', end: '2019-11-15T14:16:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T14:25:00', end: '2019-11-15T14:54:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},

  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T15:00:00', end: '2019-11-15T15:17:37', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T15:17:52', end: '2019-11-15T15:57:51', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T15:59:28', end: '2019-11-15T16:03:53', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T16:05:46', end: '2019-11-15T16:07:03', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T16:09:19', end: '2019-11-15T16:10:10', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T16:12:07', end: '2019-11-15T16:13:24', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T16:14:25', end: '2019-11-15T16:52:26', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},

  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T17:00:00', end: '2019-11-15T17:37:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T17:44:00', end: '2019-11-15T17:45:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T18:00:00', end: '2019-11-15T18:40:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T18:40:30', end: '2019-11-15T19:10:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T19:25:30', end: '2019-11-15T20:00:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T20:07:30', end: '2019-11-15T20:08:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T20:18:30', end: '2019-11-15T21:00:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T21:02:00', end: '2019-11-15T21:36:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T21:50:30', end: '2019-11-15T22:35:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T22:37:00', end: '2019-11-15T23:11:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'},
  {id: 3, resourceId: 's', astronaut: '', title: '', start: '2019-11-15T23:11:30', end: '2019-11-15T23:58:00', procedure: '', location: '', classNames: [], color: '#00FF00', borderColor: '#007B00'}
]

const defaultAstroEvents = [
  {id: 200, resourceId: 'astro1', astronaut: 'ISS CDR', title: '● SLEEP', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 201, resourceId: 'astro2', astronaut: 'FE-1',  title: '● SLEEP', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 202, resourceId: 'astro3', astronaut: 'FE-2',  title: '● SLEEP', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 203, resourceId: 'astro4', astronaut: 'FE-3',  title: '● SLEEP', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 204, resourceId: 'astro5', astronaut: 'FE-4',  title: '● SLEEP', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 205, resourceId: 'astro6', astronaut: 'FE-5',  title: '● SLEEP', start: '2019-11-15T00:00:00', end: '2019-11-15T06:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 206, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● POST SLEEP', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 207, resourceId: 'astro2', astronaut: 'FE-1',  title: '● POST SLEEP', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 208, resourceId: 'astro3', astronaut: 'FE-2',  title: '● POST SLEEP', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 209, resourceId: 'astro4', astronaut: 'FE-3',  title: '● POST SLEEP', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 210, resourceId: 'astro5', astronaut: 'FE-4',  title: '● POST SLEEP', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 211, resourceId: 'astro6', astronaut: 'FE-5',  title: '● POST SLEEP', start: '2019-11-15T06:00:00', end: '2019-11-15T07:30:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 212, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● MORNING PREP', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 213, resourceId: 'astro2', astronaut: 'FE-1',  title: '● MORNING PREP', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 214, resourceId: 'astro3', astronaut: 'FE-2',  title: '● MORNING PREP', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 215, resourceId: 'astro4', astronaut: 'FE-3',  title: '● MORNING PREP', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 216, resourceId: 'astro5', astronaut: 'FE-4',  title: '● MORNING PREP', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 217, resourceId: 'astro6', astronaut: 'FE-5',  title: '● MORNING PREP', start: '2019-11-15T07:30:00', end: '2019-11-15T08:00:00', procedure: '', location: '', classNames: ['scheduled']},
  
  {id: 218, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● DPC', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 219, resourceId: 'astro2', astronaut: 'FE-1',  title: '● DPC', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 220, resourceId: 'astro3', astronaut: 'FE-2',  title: '● DPC', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 221, resourceId: 'astro4', astronaut: 'FE-3',  title: '● DPC', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 222, resourceId: 'astro5', astronaut: 'FE-4',  title: '● DPC', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 223, resourceId: 'astro6', astronaut: 'FE-5',  title: '● DPC', start: '2019-11-15T08:00:00', end: '2019-11-15T08:15:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  
  {id: 224, resourceId: 'astro2', astronaut: 'FE-1',  title: '● EXERCISE ARED', start: '2019-11-15T08:20:00', end: '2019-11-15T09:50:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 225, resourceId: 'astro2', astronaut: 'FE-1',  title: '● EXERCISE CEVIS', start: '2019-11-15T09:50:00', end: '2019-11-15T10:50:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 226, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EXERCISE ARED', start: '2019-11-15T10:20:00', end: '2019-11-15T11:50:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 227, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EXERCISE CEVIS', start: '2019-11-15T13:30:00', end: '2019-11-15T14:30:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 228, resourceId: 'astro4', astronaut: 'FE-3',  title: '● ROBOTICS', start: '2019-11-15T08:45:00', end: '2019-11-15T09:45:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 229, resourceId: 'astro6', astronaut: 'FE-5',  title: '● ROBOTICS', start: '2019-11-15T08:45:00', end: '2019-11-15T09:45:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 230, resourceId: 'astro4', astronaut: 'FE-3',  title: '● EVA SUPPORT', start: '2019-11-15T10:15:00', end: '2019-11-15T15:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 231, resourceId: 'astro6', astronaut: 'FE-5',  title: '● EVA SUPPORT', start: '2019-11-15T10:15:00', end: '2019-11-15T15:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 232, resourceId: 'astro4', astronaut: 'FE-3',  title: '● ROBOTICS WORKSTATION', start: '2019-11-15T15:00:00', end: '2019-11-15T15:40:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 233, resourceId: 'astro6', astronaut: 'FE-5',  title: '● ROBOTICS WORKSTATION', start: '2019-11-15T15:00:00', end: '2019-11-15T15:40:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 234, resourceId: 'astro4', astronaut: 'FE-3',  title: '● AIRLOCK CONFIG', start: '2019-11-15T15:55:00', end: '2019-11-15T16:10:00', procedure: '', location: '', classNames: ['sequenced1']},
  {id: 235, resourceId: 'astro6', astronaut: 'FE-5',  title: '● AIRLOCK CONFIG', start: '2019-11-15T15:55:00', end: '2019-11-15T16:10:00', procedure: '', location: '', classNames: ['sequenced1']},
  {id: 236, resourceId: 'astro4', astronaut: 'FE-3',  title: '● POST EVA', start: '2019-11-15T16:10:00', end: '2019-11-15T17:30:00', procedure: '1.240', location: '', classNames: ['sequenced1']},
  {id: 237, resourceId: 'astro6', astronaut: 'FE-5',  title: '● POST EVA', start: '2019-11-15T16:10:00', end: '2019-11-15T17:30:00', procedure: '1.240', location: '', classNames: ['sequenced1']},
  {id: 238, resourceId: 'astro4', astronaut: 'FE-3',  title: '● AIRLOCK DECONFIG POST EVA', start: '2019-11-15T17:30:00', end: '2019-11-15T18:00:00', procedure: '1.350', location: '', classNames: ['sequenced1']},
  {id: 239, resourceId: 'astro6', astronaut: 'FE-5',  title: '● AIRLOCK DECONFIG POST EVA', start: '2019-11-15T17:30:00', end: '2019-11-15T18:00:00', procedure: '1.350', location: '', classNames: ['sequenced1']},
  {id: 240, resourceId: 'astro4', astronaut: 'FE-3',  title: '● EVENING MEAL', start: '2019-11-15T18:00:00', end: '2019-11-15T18:25:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 241, resourceId: 'astro6', astronaut: 'FE-5',  title: '● EVENING MEAL', start: '2019-11-15T18:00:00', end: '2019-11-15T18:25:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 242, resourceId: 'astro4', astronaut: 'FE-3',  title: '● EVENING DPC', start: '2019-11-15T18:25:00', end: '2019-11-15T18:30:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 243, resourceId: 'astro6', astronaut: 'FE-5',  title: '● EVENING DPC', start: '2019-11-15T18:25:00', end: '2019-11-15T18:30:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 244, resourceId: 'astro4', astronaut: 'FE-3',  title: '● HMS OCT SUBJ', start: '2019-11-15T18:35:00', end: '2019-11-15T19:20:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 245, resourceId: 'astro6', astronaut: 'FE-5',  title: '● HMS OCT CMO', start: '2019-11-15T18:35:00', end: '2019-11-15T19:20:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 246, resourceId: 'astro4', astronaut: 'FE-3',  title: '● HMS OCT SUBJ', start: '2019-11-15T19:20:00', end: '2019-11-15T20:05:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 247, resourceId: 'astro6', astronaut: 'FE-5',  title: '● HMS OCT CMO', start: '2019-11-15T19:20:00', end: '2019-11-15T20:05:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 248, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EVA PREP', start: '2019-11-15T09:00:00', end: '2019-11-15T10:00:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 249, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● HMS OCT SUBJ', start: '2019-11-15T08:15:00', end: '2019-11-15T08:55:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 250, resourceId: 'astro3', astronaut: 'FE-2',  title: '● HMS OCT SUBJ', start: '2019-11-15T08:15:00', end: '2019-11-15T08:55:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 251, resourceId: 'astro5', astronaut: 'FE-4',  title: '● HMS OCT CMO', start: '2019-11-15T08:15:00', end: '2019-11-15T08:55:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 252, resourceId: 'astro2', astronaut: 'FE-1',  title: '● BASS OPS TEST', start: '2019-11-15T11:00:00', end: '2019-11-15T12:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 253, resourceId: 'astro2', astronaut: 'FE-1',  title: '● BASS OPS CONCLUDE', start: '2019-11-15T13:25:00', end: '2019-11-15T14:55:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 254, resourceId: 'astro2', astronaut: 'FE-1',  title: '● MIDDAY MEAL', start: '2019-11-15T12:15:00', end: '2019-11-15T13:15:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 255, resourceId: 'astro5', astronaut: 'FE-4',  title: '● MIDDAY MEAL', start: '2019-11-15T12:15:00', end: '2019-11-15T13:15:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 256, resourceId: 'astro2', astronaut: 'FE-1',  title: '● MIDDECK TRANSFER', start: '2019-11-15T15:00:00', end: '2019-11-15T16:50:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 257, resourceId: 'astro5', astronaut: 'FE-4',  title: '● MIDDECK TRANSFER', start: '2019-11-15T15:00:00', end: '2019-11-15T16:50:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 258, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● EVA', start: '2019-11-15T09:15:00', end: '2019-11-15T15:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 259, resourceId: 'astro3', astronaut: 'FE-2',  title: '● EVA', start: '2019-11-15T09:15:00', end: '2019-11-15T15:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 260, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● EXTRAVEHICULAR ROBOTICS', start: '2019-11-15T15:00:00', end: '2019-11-15T15:30:00', procedure: '', location: '', classNames: ['sequenced2']},
  {id: 261, resourceId: 'astro3', astronaut: 'FE-2',  title: '● AMS TOOLS CHECK', start: '2019-11-15T15:00:00', end: '2019-11-15T15:30:00', procedure: '', location: '', classNames: ['sequenced3']},
  {id: 262, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● POST EVR', start: '2019-11-15T15:30:00', end: '2019-11-15T15:40:00', procedure: '', location: '', classNames: ['sequenced2']},
  {id: 263, resourceId: 'astro3', astronaut: 'FE-2',  title: '● TOOLS STOWAGE', start: '2019-11-15T15:30:00', end: '2019-11-15T15:40:00', procedure: '', location: '', classNames: ['sequenced3']},
  {id: 264, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● CREWLOCK INGRESS', start: '2019-11-15T15:40:00', end: '2019-11-15T15:55:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 265, resourceId: 'astro3', astronaut: 'FE-2',  title: '● CREWLOCK INGRESS', start: '2019-11-15T15:40:00', end: '2019-11-15T15:55:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 266, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● PRE REPRESS', start: '2019-11-15T15:55:00', end: '2019-11-15T16:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 267, resourceId: 'astro3', astronaut: 'FE-2',  title: '● PRE REPRESS', start: '2019-11-15T15:55:00', end: '2019-11-15T16:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 268, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● CREWLOCK REPRESS', start: '2019-11-15T16:00:00', end: '2019-11-15T16:10:00', procedure: 'ISS EVA SYS/7A - ALL/FIN 6 CUE CARD', location: 'QUEST Crew Lock', classNames: ['scheduled']},
  {id: 269, resourceId: 'astro3', astronaut: 'FE-2',  title: '● CREWLOCK REPRESS', start: '2019-11-15T16:00:00', end: '2019-11-15T16:10:00', procedure: 'ISS EVA SYS/7A - ALL/FIN 6 CUE CARD', location: 'QUEST Crew Lock', classNames: ['scheduled']},
  {id: 270, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● POST EVA', start: '2019-11-15T16:10:00', end: '2019-11-15T17:30:00', procedure: '1.240', location: '', classNames: ['scheduled']},
  {id: 271, resourceId: 'astro3', astronaut: 'FE-2',  title: '● POST EVA', start: '2019-11-15T16:10:00', end: '2019-11-15T17:30:00', procedure: '1.240', location: '', classNames: ['scheduled']},
  {id: 272, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● EMU POWERUP/POWERDOWN', start: '2019-11-15T17:30:00', end: '2019-11-15T17:35:00', procedure: '1.520', location: '', classNames: ['scheduled']},
  {id: 273, resourceId: 'astro3', astronaut: 'FE-2',  title: '● EMU POWERUP/POWERDOWN', start: '2019-11-15T17:30:00', end: '2019-11-15T17:35:00', procedure: '1.520', location: '', classNames: ['scheduled']},
  {id: 274, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● EVENING MEAL', start: '2019-11-15T18:00:00', end: '2019-11-15T18:25:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 275, resourceId: 'astro3', astronaut: 'FE-2',  title: '● EVENING MEAL', start: '2019-11-15T18:00:00', end: '2019-11-15T18:25:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 276, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● EVENING DPC', start: '2019-11-15T18:25:00', end: '2019-11-15T18:30:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 277, resourceId: 'astro3', astronaut: 'FE-2',  title: '● EVENING DPC', start: '2019-11-15T18:25:00', end: '2019-11-15T18:30:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},

  {id: 278, resourceId: 'astro2', astronaut: 'FE-1',  title: '● EVENING MEAL', start: '2019-11-15T18:00:00', end: '2019-11-15T18:25:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 279, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EVENING MEAL', start: '2019-11-15T18:00:00', end: '2019-11-15T18:25:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 280, resourceId: 'astro2', astronaut: 'FE-1',  title: '● EVENING DPC', start: '2019-11-15T18:25:00', end: '2019-11-15T18:30:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},
  {id: 281, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EVENING DPC', start: '2019-11-15T18:25:00', end: '2019-11-15T18:30:00', procedure: '', location: '', classNames: ['time-critical','scheduled']},

  {id: 282, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● EXERCISE CEVIS', start: '2019-11-15T19:15:00', end: '2019-11-15T20:15:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 283, resourceId: 'astro3', astronaut: 'FE-2',  title: '● EXERCISE ARED', start: '2019-11-15T18:40:00', end: '2019-11-15T20:15:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 284, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● HMS FUND SUBJ', start: '2019-11-15T18:30:00', end: '2019-11-15T19:10:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 285, resourceId: 'astro5', astronaut: 'FE-4',  title: '● HMS FUND CMO', start: '2019-11-15T18:30:00', end: '2019-11-15T19:10:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 286, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EVA TOOL STOW', start: '2019-11-15T17:00:00', end: '2019-11-15T18:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 287, resourceId: 'astro5', astronaut: 'FE-4',  title: '● EVA TOOL STOW', start: '2019-11-15T19:15:00', end: '2019-11-15T20:00:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 288, resourceId: 'astro2', astronaut: 'FE-1',  title: '● OBT-38S-TEST', start: '2019-11-15T17:00:00', end: '2019-11-15T18:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 289, resourceId: 'astro2', astronaut: 'FE-1',  title: '● OBT-38S-TEST', start: '2019-11-15T18:30:00', end: '2019-11-15T20:05:00', procedure: '', location: '', classNames: ['scheduled']},

  {id: 290, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● PRE SLEEP', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 291, resourceId: 'astro2', astronaut: 'FE-1',  title: '● PRE SLEEP', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 292, resourceId: 'astro3', astronaut: 'FE-2',  title: '● PRE SLEEP', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 293, resourceId: 'astro4', astronaut: 'FE-3',  title: '● PRE SLEEP', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 294, resourceId: 'astro5', astronaut: 'FE-4',  title: '● PRE SLEEP', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 295, resourceId: 'astro6', astronaut: 'FE-5',  title: '● PRE SLEEP', start: '2019-11-15T20:30:00', end: '2019-11-15T22:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 296, resourceId: 'astro1', astronaut: 'ISS CDR',  title: '● SLEEP', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 297, resourceId: 'astro2', astronaut: 'FE-1',  title: '● SLEEP', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 298, resourceId: 'astro3', astronaut: 'FE-2',  title: '● SLEEP', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 299, resourceId: 'astro4', astronaut: 'FE-3',  title: '● SLEEP', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 300, resourceId: 'astro5', astronaut: 'FE-4',  title: '● SLEEP', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: ['scheduled']},
  {id: 301, resourceId: 'astro6', astronaut: 'FE-5',  title: '● SLEEP', start: '2019-11-15T22:00:00', end: '2019-11-15T24:00:00', procedure: '', location: '', classNames: ['scheduled']}
]

const UOSTPV: React.FC<AppProps> = ( props ) => {
  const calendarRef = React.useRef<any>(null);
  const currentTimeRef = React.useRef<string>("2019-11-15T15:00:00")
  const [ firstOpenEventModal, setFirstOpenEventModal ] = useState<boolean>(true);
  const [ showEventModal, setShowEventModal ] = useState<boolean>(false);
  const [ selectedEvent, setSelectedEvent ] = useState<selectedEvent>({id: -1, title: "", start: "", end: "", extendedProps: { astronaut: "", procedure: '', location: ''}, classNames: []})
  const [ astroEvents, setAstroEvents ] = useState<event[]>(defaultAstroEvents)
  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit('GET_CURRENT_TIME', props.lobbyID, (time: string) => {
        currentTimeRef.current = time;
      })
    }, 1000)
    return () => clearInterval(interval);
  }, [currentTimeRef.current])
  useEffect(() => {
    socket.off('UPDATE_EVENTS').on('UPDATE_EVENTS', (eventID: string, newStatus: string) => {
      var oldAstroEvents = astroEvents;
      var newAstroEvents = oldAstroEvents.map((event) => {
        if (event.id === parseInt(eventID)) {
          var newClassNames = event.classNames.filter((className) => { return className === 'time-critical' });
          newClassNames.push(newStatus);
          event.classNames = newClassNames;
          var sel_event = calendarRef.current.getApi().getEventById(eventID);
          sel_event.setProp('classNames', newClassNames)
          setSelectedEvent(sel_event);
        }
        return event;
      })
      setAstroEvents([...newAstroEvents]);
    })
  }, [astroEvents])
  function handleEventClick(info: { el: HTMLElement; event: any; jsEvent: MouseEvent; view: any; }) {
    if (info.event.id > 3) {
      if (firstOpenEventModal) {
        socket.emit('FIRST_CONSOLE_OPEN', 'event-modal')
        setFirstOpenEventModal(false);
      }
      setSelectedEvent(info.event);
      setShowEventModal(true);
      document.getElementById("view-event-modal")!.style.visibility = "visible";
    }
  }
  function handleEventModalClose() {
    setShowEventModal(false);
    setTimeout(() => {
      document.getElementById("view-event-modal")!.style.visibility = "hidden";
    }, 500)
  }
  return(
    <>
      <div className={props.className}>
        <FullCalendar
          ref={calendarRef}
          nowIndicator
          now={currentTimeRef.current}
          timeZone={'UTC'}
          eventClick={handleEventClick}
          height={634}
          header={{left: '', center: '', right: ''}}
          resourceLabelText=' '
          resourceAreaWidth={180}
          defaultView='resourceTimeline' 
          plugins={[resourceTimelinePlugin]}
          schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
          scrollTime='13:30:00'
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
          eventSources={[headerEvents, astroEvents]}
        />
      </div>
      <CSSTransition 
        in={showEventModal === true}
        timeout={500}
        classNames="modal"
        onEnter={() => {animateCSS("#modal-overlay-view-event", "fadeIn", ["faster"])}}
        onExit={() => {animateCSS("#modal-content-view-event", "fadeOut", ["faster"])}}
      >
        <OSTPVEventModal lobbyID={props.lobbyID} event={selectedEvent} show={showEventModal} closeFunction={handleEventModalClose}/>
      </CSSTransition>
    </>
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
  .time-critical {
    border-color: royalblue !important;
  }
  .scheduled {
    background-color: #DDDDDD;
    color: #000;
    border-color: #000;
  }
  .completed {
    background-color: #848C8C;
    color: #000;
    border-color: #000;
  }
  .sequenced1 {
    background-color: #00B0F0;
    color: #000;
    border-color: #000;
  }
  .sequenced2 {
    background-color: #00B050;
    color: #000;
    border-color: #000;
  }
  .sequenced3 {
    background-color: #FFFF00;
    color: #000;
    border-color: #000;
  }
  .active {
    background-color: #A9D08E;
    color: #000;
    border-color: #000;
  }

`;