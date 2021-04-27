import React, { useState, useEffect } from "react";
import "./Home.css";
import { Accordion, Card } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [playerData, setPlayerData] = useState([]);

  const nflData = async () => {
    const response = await axios.get
        ('https://project.trumedianetworks.com/api/nfl/players', {
                headers: {
                 Accept: 'application.json', tempToken: '478817da-785c-44c6-b5ab-fb0c285f9a74'
         }
        }
    );

    setPlayerData(response.data);
  };

  const renderAccordion = (player, index) => {
    return (
      <Accordion key={index}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={player}>
            {player.fullName} Info <i>+</i>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={player}>
            <Card.Body>             
                 
              <ul>
                <li><Card.Img variant="top" src={player.playerImage} /></li>
                <li><Card.Img variant="top" src={player.teamImage} /></li>
              </ul>
              
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  useEffect(() => {
    nflData();
  }, []);

  return <div className="App">{playerData.map(renderAccordion)}</div>;
};

export default Home;













// import React, { Component } from 'react';
// import axios from 'axios';


// class Home extends Component {
//     constructor(props){
//       super(props)
//       this.state={
//           players:[]
//       }  
//     }


//     async componentDidMount() {
//         const url = 'https://project.trumedianetworks.com/api/nfl/players'
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
//         this.setState({players: result.data})
//     }
    


//     render () {
//         const {players} = this.state;
//         console.log({players})
//         let mappedArray = (players).map((player) => {
       
//            return(
               
      
//                <li>{player.fullName} {player.playerImage}</li>
//            )
         
//         })
//         return(

//             <ul>
//             {mappedArray}
//             </ul>
            
//         );
//     }
// }

// export default Home;