import React, { useState, useEffect } from "react";
import "./Players.css";
import { Table, Container, Row } from "react-bootstrap";
import axios from "axios";

const Mayfield = () => {
  const [playerData, setPlayerData] = useState([]);

  const maynflData = async () => {
    const response = await axios.get
        ('https://project.trumedianetworks.com/api/nfl/player/2560800', {
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
         <td class="text-center" >{playerId.Cmp}</td>
         <td class="text-center" >{playerId.Rush}</td>
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
          <tr class="text-center">Baker Mayfield 2018 Stats</tr>
            <tr>
                <th class="text-center">Week</th>
                <th class="text-center">Opponent</th>
                <th class="text-center">Att</th>
                <th class="text-center" >Cmp</th>
                <th class="text-center" >Rush</th>
            </tr>
        </thead>
        <tbody>
        {playerData.map(renderPlayerStats)}
        </tbody>

      </Table> </div>;
};

export default Mayfield;




























// import React, { Component } from 'react';
// import axios from 'axios'

// class Mayfield extends Component {
//     constructor(props){
//       super(props)
//       this.state={
//           playerStats:[]
//       }  
//     }


//     async componentDidMount() {
//         const url = 'https://project.trumedianetworks.com/api/nfl/player/2560800'
//         let result = null;
//         try{
//             result = await axios(url, {
//                 headers: {
//                     Accept: 'application.json', tempToken: 'f6095659-814e-464b-8f8c-cf9769a996dc'
//                 }
//             })
//         } catch(e) {
//             console.log (e)
//         }
//         this.setState({playerStats: result.data})
//     }
//     render() {
//         const {playerStats} = this.state;
//         console.log({playerStats})
//         let mappedArray = (playerStats).map((player) => {
//            return(
//                <li>{player.seasonYear} {player.week}</li>
//            ) 
//         })
//         return(
//             <div className="App">
//             <ul>
//             {mappedArray}
//             </ul>
//             </div>
//         );
//     }
// }
// export default Mayfield;