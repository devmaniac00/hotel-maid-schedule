import { Draggable, Droppable } from 'react-beautiful-dnd';
import TaskItem from '../TaskItem/TaskItem';

const Column = ({ id, box, name }) => {
  return (
    <div className="bg-slate-200 p-[10px] rounded-s-lg min-w-[250px]">
      <Droppable droppableId={id} type="group">
        {(provided) => (
          <div
            className={`flex flex-col gap-[10px] bg-white pb-[15px] min-h-[200px] m-[5px] border-[2px] border-slate-300 rounded-sm`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="text-center text-lg font-semibold bg-slate-200">
              {name}
            </h2>

            {box?.map((task, index) => {
              return (
                <Draggable
                  draggableId={task.id.toString()}
                  key={task.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="bg-slate-200 py-[15px] px-[5px] mr-auto ml-auto w-[90%] border-[2px] border-slate-300 shadow-sm rounded-sm"
                    >
                      <TaskItem key={index} task={task} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
