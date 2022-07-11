import { Checkbox } from '@chakra-ui/react'
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const { Container, ContentCheck, ContentIcon } = require("./styles");

function ItemList(props) {
    const { value } = props;
    return (
        <Container>
            <ContentCheck>
                <Checkbox disabledRipple />
                {value}
            </ContentCheck>
            <ContentIcon>
                <FontAwesomeIcon icon={faPen} onClick={function() { console.log('click'); }} />
                <FontAwesomeIcon icon={faTrash} />
            </ContentIcon>
        </Container>

    )
}

export default ItemList; 