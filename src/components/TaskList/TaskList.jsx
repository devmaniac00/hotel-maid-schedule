import React, { useRef, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column/Column';

const TaskList = ({ tasks, setTasks }) => {
  const [milana, setMilana] = useState([]);
  const [sophia, setSophia] = useState([]);
  const [mary, setMary] = useState([]);

  const handlerDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    console.log(result, 'END');

    if (source?.droppableId === null || destination?.droppableId === null)
      return;

    if (source?.droppableId === destination?.droppableId) {
      if (source.droppableId === '1') {
        setTasks(reordered(tasks));
      } else if (source.droppableId === '2') {
        setMilana(reordered(milana));
      } else if (source.droppableId === '3') {
        setSophia(reordered(sophia));
      } else if (source.droppableId === '4') {
        setMary(reordered(mary));
      }

      return;
    }

    if (source.droppableId === '1') {
      setTasks(removeItemById(draggableId, tasks));
    } else if (source.droppableId === '2') {
      setMilana(removeItemById(draggableId, milana));
    } else if (source.droppableId === '3') {
      setSophia(removeItemById(draggableId, sophia));
    } else if (source.droppableId === '4') {
      setMary(removeItemById(draggableId, mary));
    }

    const task = findItemById(draggableId, [
      ...tasks,
      ...milana,
      ...sophia,
      ...mary,
    ]);

    console.log(result);

    if (destination?.droppableId === '1') {
      setTasks([{ ...task }, ...tasks]);
    } else if (destination?.droppableId === '2') {
      setMilana([{ ...task }, ...milana]);
    } else if (destination?.droppableId === '3') {
      setSophia([{ ...task }, ...sophia]);
    } else if (destination?.droppableId === '4') {
      setMary([{ ...task }, ...mary]);
    }

    function reordered(array) {
      const [element] = array.filter((item) => item.id == draggableId);
      const copyarray = removeItemById(draggableId, [...array]);
      const reorderedTasks = [...copyarray];
      reorderedTasks.splice(destination.index, 0, element);
      return reorderedTasks;
    }

    function findItemById(id, array) {
      return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
      return array.filter((item) => {
        return item.id != id;
      });
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handlerDragEnd}>
        <div className="flex">
          <Column id={'1'} box={tasks} name={'Tasks'} />

          <Column id={'2'} box={milana} name={'Milana'} />

          <Column id={'3'} box={sophia} name={'Sophia'} />

          <Column id={'4'} box={mary} name={'Mary'} />
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskList;
