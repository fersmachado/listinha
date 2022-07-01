import { Heading } from "@chakra-ui/layout"
import styled from "styled-components"
import Add from "../commnon/components/Add"
import List from "../commnon/components/List"

const Container = styled.div`
  padding: 32px;
  background: #E7EAF9;
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
  return (
    <Container>
      <Heading>I'm a Heading</Heading>

      <Content>

        <Left>
          <Add />
          <List />

        </Left>

        <Right>
          dada
        </Right>

      </Content>

    </Container>
  )
}
