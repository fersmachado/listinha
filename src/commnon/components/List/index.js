import ItemList from "../ItemList";

const { Container } = require("./styles");

function List() {

    return (
        <Container>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            
        </Container>
    )
}

export default List;

