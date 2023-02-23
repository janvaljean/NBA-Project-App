import Container from "react-bootstrap/esm/Container"
import {data} from "../helper/data"
import PlayerCard from "./PlayerCard"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


const CardContainer = () => {
    const [search, setSearch] = useState("")
    
    const filteredData = data.filter(player => {
        return player.name.toLowerCase().includes(search.toLowerCase().trim())
        
    })
  return (
    <>
    <Form.Control placeholder="Search Player..." 
    className="w-50 m-auto"
        type= "search"
        onChange={(e) => setSearch(e.target.value)}
        
    />
    <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="g-3 justify-content-center">
            {filteredData.map((player, index) => {
            return (
                <Col key={index} xl={3} lg={4} md={6} >
                <PlayerCard {...player} />
                </Col>
            
        )})}
        </Row>
        

    </Container>
    </>
  )
}

export default CardContainer
