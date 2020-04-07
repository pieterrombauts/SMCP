import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import capcom_1 from "./../../media/Capcom_1.png"


interface AppProps {
  className?: string;
};


function handleStatusClose(){
  console.log("Hello world");

  // console.log(console);
  // console.log(statusReport);

  setTimeout(() => {
    document.getElementById("status-modal")!.style.visibility = "hidden";
  }, 500)

  // document.getElementById("console")!.value = "";



}

const USTATUS: React.FC<AppProps> = ( props ) => {
  return(
    <div className={props.className}>

     
      <table style={{marginLeft: "500px"}}>

        <tr>
          <th>Status Update</th>
        </tr>

        <tr>
          <td> <input id='console' type='text' name='console' placeholder='Console Name'></input></td>
        </tr>


        <tr>
          <td> 
            <textarea id='statusReport'  name='statusReport'> </textarea>
          </td>
        </tr>

        <tr>
          <td> <input onClick={handleStatusClose} type='submit' value='Submit status report' ></input></td>
        </tr>

      </table>


    </div>
  );
}

export const STATUS = styled(USTATUS)`
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