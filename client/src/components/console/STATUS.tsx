import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import socket from '../Socket';

interface AppProps {
  className?: string;
  lobbyID: string;
  userRole: string;
  time: string;
  closeFunction: () => void;
};

const USTATUS: React.FC<AppProps> = ( props ) => {
  const [formValues, setFormValues] = useState({ sender: "", subject: "test", status: "test 2", time: ""})
  function sendStatusReport(e: React.FormEvent) {
    e.preventDefault();
    var newValues = formValues;
    newValues["sender"] = props.userRole;
    newValues["time"] = props.time;
    setFormValues(newValues);
    socket.emit("STATUS_REPORT", formValues, props.lobbyID);
    setFormValues({ sender: "", subject: "", status: "", time: ""})
    console.log("Cleared form");
    props.closeFunction();
  }
  function updateValues(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(formValues["subject"]);
    console.log(e.currentTarget.value);
    var newValues = formValues;
    var name: "subject"|"status" = e.currentTarget.name === "subject" ? "subject" : "status";
    newValues[name] = e.currentTarget.value;
    setFormValues(newValues);
    console.log(e.currentTarget.value);
    console.log(formValues["subject"])
  }
  return(
    <Form onSubmit={sendStatusReport}>
      <Form.Group controlId="EFN.Subject">
        <Form.Label> Subject </Form.Label>
        <Form.Control type="text" name="subject" value={formValues["subject"]} placeholder="Brief description of the status report" onChange={updateValues} />
      </Form.Group>
      <Form.Group controlId="EFN.Body">
        <Form.Label>Status Report</Form.Label>
        <Form.Control as="textarea" name="status" value={formValues["status"]} rows="5" onChange={updateValues} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit Report</Button>
    </Form>
  );
}

export const STATUS = styled(USTATUS)``;