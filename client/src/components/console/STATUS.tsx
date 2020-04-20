import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import socket from '../Socket';
import FormControl from 'react-bootstrap/FormControl';

interface AppProps {
  className?: string;
  lobbyID: string;
  userRole: string;
  time: string;
  closeFunction: () => void;
};

const USTATUS: React.FC<AppProps> = ( props ) => {
  const subjectRef = React.useRef<any>(null);
  const contentRef = React.useRef<any>(null);
  function sendStatusReport(e: React.FormEvent) {
    e.preventDefault();
    console.log(subjectRef.current.value, contentRef.current.value)
    var newValues = {subject: subjectRef.current.value, content: contentRef.current.value, time: ""};
    console.log(newValues);
    newValues["time"] = props.time;
    socket.emit("STATUS_REPORT", newValues, props.lobbyID);
    subjectRef.current.value = "";
    contentRef.current.value = "";
    props.closeFunction();
  }
  return(
    <Form onSubmit={sendStatusReport}>
      <Form.Group controlId="EFN.Subject">
        <Form.Label> Subject </Form.Label>
        <Form.Control type="text" name="subject" placeholder="Brief description of the status report" ref={subjectRef}/>
      </Form.Group>
      <Form.Group controlId="EFN.Body">
        <Form.Label>Status Report</Form.Label>
        <Form.Control as="textarea" name="content" rows="5" ref={contentRef} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit Report</Button>
    </Form>
  );
}

export const STATUS = styled(USTATUS)``;