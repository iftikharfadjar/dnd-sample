import React from "react";
import Task from "./Task";
import styled from "styled-components";
import { Draggable, Droppable } from "react-beautiful-dnd";

const CardContainer = styled.div`
  width: 300px;
  margin: 0x 25px;
  background: ${(props) => props.color};
  border: ${(props) =>
    props.isDraggingOver ? "4px dashed #FFF" : "4px dashed rgba(0,0,0,0)"};
  border-radius: 40px;
  padding: 15px;
  box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h3`
  color: #ffffff;
  text-align: center;
  margin-bottom: 25px;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: bold;
`;

const TaskContainer = styled.div`
  min-height: 400px;
  width: 100%;
`;

function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <Droppable droppableId={props.card.id} type="task">
          {(provided2, snapshot) => (
            <CardContainer
              ref={provided.innerRef}
              color={props.card.color}
              {...provided.dragHandleProps}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.draggableProps}
            >
              <CardTitle>#{props.card.title}</CardTitle>
              <TaskContainer
                ref={provided2.innerRef}
                {...provided2.droppableProps}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided2.placeholder}
              </TaskContainer>
            </CardContainer>
          )}
        </Droppable>
      )}
    </Draggable>
  );
}

export default Card;
