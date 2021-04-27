import React, { useState, useEffect } from "react";
import "./Players.css";
import { Table, Container, Row } from "react-bootstrap";
import axios from "axios";

const Carr = () => {
  const [playerData, setPlayerData] = useState([]);

  const carnflData = async () => {
    const response = await axios.get
        ('https://project.trumedianetworks.com/api/nfl/player/2543499', {
                headers: {
                 Accept: 'application.json', tempToken: '478817da-785c-44c6-b5ab-fb0c285f9a74'
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
         <td class="text-center">{playerId.Cmp}</td>
         <td class="text-center">{playerId.Rush}</td>
     </tr>
    );
  };

  useEffect(() => {
    carnflData();
  }, []);

  return <div className="Carr">
    <Container>
        <Row class="text-center">DEREK CARR 2018 STATS</Row>
      </Container>
      <Table striped bordered Hover>
        <thead>
            <tr>
                <th class="text-center">Week</th>
                <th class="text-center" >Opponent</th>
                <th class="text-center" >Att</th>
                <th class="text-center" >Cmp</th>
                <th class="text-center" >Rush</th>
            </tr>
        </thead>
        <tbody>
        {playerData.map(renderPlayerStats)}
        </tbody>

      </Table> </div>;
};

export default Carr;