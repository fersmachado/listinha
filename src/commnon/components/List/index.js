import ItemList from "../ItemList";

const { Container } = require("./styles");

function List(props) {
    const { itens } = props;
    return (
        <Container>
            {
                itens.map(item => {
                    return (
                        <ItemList value={item.value} />
                    )
                })
            }
        </Container>
    )
}

export default List;

