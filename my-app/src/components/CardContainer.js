import Container from "react-bootstrap/esm/Container"
import {data} from "../helper/data"
import PlayerCard from "./PlayerCard"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardContainer = () => {
  return (
    <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="g-3 justify-content-center">
            {data.map((player, index) => {
            return (
                <Col key={index} xl={3} lg={4} md={6} >
                <PlayerCard {...player} />
                </Col>
            
        )})}
        </Row>
        

    </Container>
  )
}

export default CardContainer
