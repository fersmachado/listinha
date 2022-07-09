import { Heading } from "@chakra-ui/layout"
import { useState } from "react"
import styled from "styled-components"
import Add from "../commnon/components/Add"
import List from "../commnon/components/List"

const Container = styled.div`
  padding: 32px;
  background: #b087c100;
  color: black;
`

const Content = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 24px;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
`

export default function Home() {
  const [itens, setItens] = useState([]);

  const onPlus = (value) => {
    setItens([
      ...itens,
      {
        value
      }
    ])
  }


 

  return (
    <Container>
      <Heading>LISTA DE COMPRAS</Heading>

      <Content>

        <Left>
          <Add
            onPlus={onPlus}
          />
          <List
            itens={itens}

          />

        </Left>

        <Right>
          dada
        </Right>

      </Content>

    </Container>
  )
}
