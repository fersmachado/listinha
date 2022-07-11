import ItemList from "../ItemList";

const { Container } = require("./styles");

function Completed(props) {
    const { itens, onRemove, onCheck } = props;
    return (
        <div>
            <Container>
                <h2>Concluídos</h2>
            </Container>
            {
                itens.map(item => {
                    return (
                        <ItemList
                            value={item.value}
                            id={item.id}
                            check={item.check}
                            onRemove={onRemove}
                            onCheck={onCheck}
                        />
                    )
                })
            }
        </div>
    )
}

export default Completed;