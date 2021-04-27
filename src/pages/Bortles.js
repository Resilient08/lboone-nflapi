import React, { useState, useEffect } from "react";
import "./Home.css";
import { Table, Container, Row } from "react-bootstrap";
import axios from "axios";

const Bortles = () => {
  const [playerData, setPlayerData] = useState([]);

  const bornflData = async () => {
    const response = await axios.get
        ('https://project.trumedianetworks.com/api/nfl/player/2543477', {
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
         <td class="text-center">{playerId.Att}</td>
         <td class="text-center">{playerId.Cmp}</td>
         <td class="text-center" >{playerId.Rush}</td>
     </tr>
    );
  };

  useEffect(() => {
    bornflData();
  }, []);

  return <div className="Bortles">

      <Container>
        <Row class="text-center">BLAKE BORTLES STATS</Row>
      </Container>
    
      <Table striped bordered Hover>
        <thead>
            <tr>
                <th class="text-center">Week</th>
                <th class="text-center">Opponent</th>
                <th class="text-center" >Att</th>
                <th class="text-center">Cmp</th>
                <th class="text-center" >Rush</th>
            </tr>
        </thead>
        <tbody>
        {playerData.map(renderPlayerStats)}
        </tbody>
        
      </Table> 
      
      </div>;
};

export default Bortles;