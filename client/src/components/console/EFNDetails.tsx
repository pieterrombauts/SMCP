import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { statusReport } from './customTypes'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import socket from '../Socket';

interface AppProps {
  className?: string;
  reports: statusReport[];
  efnID: string;
  lobbyID: string;
  closeFunction: () => void;
};

const UEFNDetails: React.FC<AppProps> = ( props ) => {
  const commentRef = React.useRef<any>(null);
  const [ currEFN, setCurrEFN ] = useState<statusReport>({_ID: "", _sender: "", _subject: "", _content: "", _status: "open", _time: "", _comments: [] })
  useEffect(() => {
    if (props.reports.length !== 0) {
      var selected_efn = props.reports.filter((report) => { return report._ID === props.efnID });
      if (selected_efn.length === 1) {
        setCurrEFN(selected_efn[0]);
      }
    }
  }, [props.efnID, props.reports])
  function addEFNComment(e: React.MouseEvent<HTMLButtonElement>) {
    socket.emit("ADD_EFN_COMMENT", commentRef.current.value, props.efnID, props.lobbyID);
    commentRef.current.value = "";
  }
  return(
    <div className={props.className}>
      { currEFN !== null && 
        <div key={props.efnID}>
          <p className="efn-id"><small>{currEFN._ID}</small></p>
          <h3 className="efn-header">{currEFN._sender.toUpperCase() + " - " + currEFN._subject}</h3>
          <p className="efn-status">{currEFN._status.toUpperCase()}</p>
          <p className="efn-content">{currEFN._content}</p>
          <hr />
          {currEFN._comments.map((comment) => {
            return(<><p>{comment}</p><hr /></>)
          })}
        </div>
      }
      <Form.Control as="textarea" name="content" rows="5" ref={commentRef} />
      <Button variant="primary" onClick={addEFNComment}>Add Comment</Button>
    </div>
  );
}

export const EFNDetails = styled(UEFNDetails)`
  .efn-id {
    margin-bottom: 3px;
  }
  .efn-header {
    display: inline;
  }
  .efn-status {
    display: inline;
    margin-left: 10px;
  }
  .efn-content {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
  }
`;