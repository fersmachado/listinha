import { Heading } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import styled from "styled-components"
import Add from "../commnon/components/Add"
import Completed from "../commnon/components/Completed"
import List from "../commnon/components/List"

const Container = styled.div`
  padding: 32px;
  background: #E5E5E5;
  color: black;
`

const Content = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 24px;
`

const Left = styled.div`
  flex: 2;
`

const Right = styled.div`
  flex: 2;
`

export default function Home() {
  const toast = useToast();
  const [itens, setItens] = useState([]);

  function between(min, max) {
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  const onPlus = (value) => {
    if (value == "") {
      alert("Preenche isso ai")
    } else {
      setItens([
        ...itens,
        {
          value,
          id: between(1, 9999999),
          check: false
        }
      ])
      toast({
        title: `Adicionado: (${value})`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  const onEdit = (id) => {
    console.log("onEdit: ", id)
    let item = itens.find((item) => {
      if (item.id == id) {
        return true;
      } else {
        return false;
      }
    })

    var value = prompt("Mude a tarefa!", item.value);
    if (value == "") {
      alert("Nao pode vazio")
      return;
    }

    let newItens = itens.map((item) => {
      if (item.id == id) {
        item.value = value
        return item;
      } else {
        return item;
      }
    })

    setItens(newItens);
  }

  const onRemove = (id) => {
    console.log("onRemove: ", id)
    let filteredItens = itens.filter((item) => {
      if (item.id != id) {
        return true;
      } else {
        return false;
      }
    })

    setItens(filteredItens);
  }

  const onCheck = (id) => {
    console.log("onCheck: ", id)
    let newItens = itens.map((item) => {
      if (item.id == id) {
        item.check = !item.check
        return item;
      } else {
        return item;
      }
    })

    setItens(newItens);
  }

  console.log(itens);

  return (
    <Container>
      <Heading>LISTA DE COMPRAS</Heading>

      <Content>

        <Left>
          <Add
            onPlus={onPlus}
          />
          <List
            itens={itens.filter((item) => item.check == false)}
            onEdit={onEdit}
            onRemove={onRemove}
            onCheck={onCheck}
          />
        </Left>
        <Right>
          <Completed
            itens={itens.filter((item) => item.check == true)}
            onRemove={onRemove}
            onCheck={onCheck}
          />
        </Right>

      </Content>

    </Container>
  )
}
