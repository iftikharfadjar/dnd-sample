import React, {useState} from 'react'
import Card from './Card'
import styled from 'styled-components'
import {initialData} from './initialData'

const Title = styled.h1`
  color: #7B7B7B;
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;GB GR
  padding-top: 25px;
`

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 25px;
`

function App() {
  const [state,setState] = useState(initialData)

  return (
   <React.Fragment>
     <Title>DRAG $ DROP REACT JS</Title>
     <CardContainer>
       {
         state.cardOrder.map((cardId, index) => {
           const card = state.cards[cardId]
           const tasks = card.taskIds.map(TaskId => state.tasks[TaskId])
           return <Card key={cardId} card={card} tasks={tasks} index={index} />
         })
       }
     </CardContainer>
   </React.Fragment>
  )
}

export default App

