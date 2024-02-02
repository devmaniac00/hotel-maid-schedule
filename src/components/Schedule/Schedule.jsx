import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import TasksAdd from '../TasksAdd/TasksAdd';

const Schedule = () => {
  const [tasks, setTasks] = useState([
    {
      name: 1,
      duration: 1.5,
      deadline: '10:00',
      room: '15a',
      id: Math.random(),
    },
  ]);
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [room, setRoom] = useState('');

  const addTask = () => {
    const newTask = {
      name: taskName,
      duration,
      deadline,
      room,
      id: Math.random(),
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setDuration(0);
    setDeadline(0);
    setRoom('');
  };

  return (
    <>
      <div className="relative flex justify-between bg-slate-200">
        <TasksAdd
          taskName={taskName}
          duration={duration}
          deadline={deadline}
          room={room}
          setTaskName={setTaskName}
          setDuration={setDuration}
          setDeadline={setDeadline}
          setRoom={setRoom}
          addTask={addTask}
        />
        <div className="bg-slate-200 mr-auto ml-auto">
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
};

export default Schedule;
