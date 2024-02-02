import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="">
      <p className="text-center text-[18px] font-semibold">{task.name}</p>
      <p>
        Duration <span className=" font-semibold">{task.duration} hour</span>
      </p>
      <p>
        Deadline <span className=" font-semibold">{task.deadline}</span>{' '}
      </p>
      <p>
        Room <span className=" font-semibold">{task.room}</span>
      </p>
    </div>
  );
};

export default TaskItem;
