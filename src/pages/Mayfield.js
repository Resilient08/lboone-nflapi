import React, { useState, useEffect } from "react";
import "./Players.css";
import { Table, Container, Row } from "react-bootstrap";
import axios from "axios";
import {Trumedtok} from './Trumedtok.js';

const Mayfield = () => {
  const [playerData, setPlayerData] = useState([]);

  const maynflData = async () => {
    const response = await axios.get
        ('https://project.trumedianetworks.com/api/nfl/player/2560800', {
                headers: {
                 Accept: 'application.json', tempToken: Trumedtok.api_token
         }
        }
    );

    setPlayerData(response.data);
  };

  const renderPlayerStats = (playerId, index) => {
    return (

     <tr key={index}>
         <td class="text-center">{playerId.week}</td>
         <td class="text-center">{playerId.opponent}</td>
         <td class="text-center" >{playerId.Att}</td>
         <td class="text-center" >{playerId.Cmp}</td>
         <td class="text-center" >{playerId.PsYds}</td>
         <td class="text-center" >{playerId.PsTD}</td>
     </tr>
    );
  };

  useEffect(() => {
    maynflData();
  }, []);

  return <div className="Mayfield">
    <Container>
        <Row class="text-center">BAKER MAYFIELD 2018 STATS</Row>
      </Container>
      <Table striped bordered Hover>
        <thead>
            <tr>
                <th class="text-center">Week</th>
                <th class="text-center">Opponent</th>
                <th class="text-center">Attempts</th>
                <th class="text-center" >Cmp</th>
                <th class="text-center" >PsYds</th>
                <th class="text-center" >PsTD</th>
            </tr>
        </thead>
        <tbody>
        {playerData.map(renderPlayerStats)}
        </tbody>

      </Table> </div>;
};

export default Mayfield;




