import { Checkbox } from '@chakra-ui/react'
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const { Container, ContentCheck, ContentIcon } = require("./styles");

function ItemList(props) {
    const { value, id, onEdit, onRemove, onCheck, check } = props;
    return (
        <Container>
            <ContentCheck>
                <Checkbox isChecked={check} onChange={() => onCheck(id)} />
                {value}
            </ContentCheck>
            <ContentIcon>
                {check == false ? <FontAwesomeIcon icon={faPen} onClick={() => onEdit(id)} /> : null}
                <FontAwesomeIcon icon={faTrash} onClick={() => onRemove(id)} />
            </ContentIcon>
        </Container>

    )
}

export default ItemList; 