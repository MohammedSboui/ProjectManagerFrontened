import React from "react";
import { Draggable } from "react-beautiful-dnd";
function Not(props) {
  return (
    <Draggable draggableId={props.item.id.toString()} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            style={{
              background: snapshot.draggingOver ? "lightgreen" : "#007892",
              margin: "25px",
              padding: 20,
              textAlign: "center",
              width: "85%",
            }}
          >
            {props.item.content}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export const Note = Not;
