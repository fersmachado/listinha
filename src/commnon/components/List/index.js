import ItemList from "../ItemList";

const { Container } = require("./styles");

function List(props) {
    const { itens, onEdit, onRemove, onCheck } = props;
    return (
        <Container>
            {
                itens.map(item => {
                    return (
                        <ItemList
                            value={item.value}
                            id={item.id}
                            check={item.check}
                            onEdit={onEdit}
                            onRemove={onRemove}
                            onCheck={onCheck}
                        />
                    )
                })
            }
        </Container>
    )
}

export default List;

