import { IconButton } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useToast } from '@chakra-ui/react'

const { Container } = require("./styles");

function Add(props) {
    const { onPlus } = props;
    const icon = <FontAwesomeIcon icon={faPlus} />;
    const toast = useToast();



    return (
        <Container>
            <Input placeholder="Adicione novo item" variant="filled" id="inputAdd" />
            <IconButton
                style={{ borderRadius: 20, background: "#7E6EE1", color: "#ffff" }}
                icon={icon}
                onClick={() => {
                    let elem = document.getElementById("inputAdd");
                    let value = elem.value;
                    onPlus(value);
                    elem.value = ""

                    toast({
                        title: `Adicionado: (${value})`,
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })

                    
                }}
            />
        </Container>
    )
}

export default Add;