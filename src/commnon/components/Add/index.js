import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Container } = require("./styles");

function Add() {
    const icon = <FontAwesomeIcon icon={faPlus} />;

    return (
        <Container>
            <Input placeholder="Adicione novo item" variant="filled" />
            <IconButton
                icon={icon}
            />
        </Container>
    )
}

export default Add;