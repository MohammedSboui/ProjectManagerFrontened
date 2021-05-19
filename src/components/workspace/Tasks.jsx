import { DragDropContext, Droppable } from "react-beautiful-dnd";
import React from "react";
import { Note } from "./Note";
import { Header } from "./Header";
export const Tasks = () => {
  const [data, Setdata] = React.useState({
    todo: [{ id: 1, content: "WAAAA" }],
    doing: [{ id: 3, content: "GGG" }],
    done: [],
  });
  const wa = window.location.href.split("/");
  const id = wa[wa.length - 1];
  console.log(id);

  function onDragEnd(result) {
    const { destination, source, droppableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = data[source.droppableId];
    const finish = data[destination.droppableId];

    if (start === finish) {
      const items = Array.from(data[source.droppableId]);
      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);
      Setdata((prevdata) => {
        return {
          ...prevdata,
          [source.droppableId]: items,
        };
      });
    } else {
      const sourceitems = Array.from(data[source.droppableId]);
      const destinationitems = Array.from(data[destination.droppableId]);
      const [removed] = sourceitems.splice(source.index, 1);
      destinationitems.splice(destination.index, 0, removed);

      Setdata((prevdata) => {
        return {
          ...prevdata,
          [source.droppableId]: sourceitems,
          [destination.droppableId]: destinationitems,
        };
      });
    }
  }

  return (
    <div>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="list"
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "#f2a365",
              }}
            >
              <h1>TODO</h1>
              {data["todo"].map((item, index) => (
                <Note key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="doing">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="list"
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "#f2a365",
              }}
            >
              <h1>Doing</h1>

              {data["doing"].map((item, index) => (
                <Note key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="done">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="list"
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "#f2a365",
              }}
            >
              <h1>Done</h1>

              {data["done"].map((item, index) => (
                <Note key={item.id} item={item} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
