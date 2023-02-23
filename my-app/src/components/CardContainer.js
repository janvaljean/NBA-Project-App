import Container from "react-bootstrap/esm/Container"
import {data} from "../helper/data"

const CardContainer = () => {
  return (
    <Container>
        {data.map((player) => <p key={player.id}>{player.name}</p>)}

    </Container>
  )
}

export default CardContainer
