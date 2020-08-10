import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const TaskList = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: ${(props) =>
    props.isDragging
      ? "0px 10px 20px rgba(0,0,0, 0.25 )"
      : "0px 4px 4px rgba(0,0,0, 0.25 )"};
  cursor: Pointer;
`;

const TaskListText = styled.h6`
  color: #7b7b7b;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0px;
  padding: 15px;
  text-transform: none;
`;

function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <TaskList
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskListText>{props.task.content}</TaskListText>
        </TaskList>
      )}
    </Draggable>
  );
}

export default Task;
