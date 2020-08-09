import React from 'react'
import Task from './Task'
import styled from 'styled-components'

const CardContainer = styled.div`
    width:300px;
    margin:0x 25px;
    background :${props => props.color};
    border-radius:40px;
    padding:15px;
    box-shadow:25px 25px 50px rgba(0,0,0,0.15);
    `

    const CardTitle = styled.h3`
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 25px;
    font-family: sans-serif;
    font-size: 25px;
    font-weight: bold;
    `

    const TaskContainer = styled.div`
    min-height: 400px;
    width: 100%;
    `

function Card(props) {
    return (
        <CardContainer color={props.card.color}>
            <CardTitle>
                #{props.card.title}
            </CardTitle>
            <TaskContainer>
                {props.tasks.map((task,index) => <Task key={task.id} task={task} index={index} />)}
            </TaskContainer>
        </CardContainer>
    )
}

export default Card
