const TasksAdd = ({
  taskName,
  duration,
  deadline,
  room,
  setTaskName,
  setDuration,
  setDeadline,
  setRoom,
  addTask,
}) => {
  return (
    <div className="w-[250px] flex flex-col items-center gap-[15px] mb-[50px] h-screen bg-white p-[15px]">
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col">
          <label className="mr-[5px] text-center font-semibold">Task</label>
          <input
            type="number"
            className="p-[10px] rounded-sm"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mr-[5px] text-center font-semibold">Duration</label>
          <input
            type="time"
            className="p-[10px] rounded-sm"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mr-[5px] text-center font-semibold">Deadline</label>
          <input
            type="time"
            className="p-[10px] rounded-sm"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mr-[5px] text-center font-semibold">
            Hotel Apartment
          </label>
          <input
            type="text"
            className="p-[10px] rounded-sm"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={addTask}
        className="bottom-[25px] mt-auto w-full bg-slate-200 hover:bg-slate-300 font-semibold transition-bg ease-in-out duration-150 p-[10px] rounded-sm "
      >
        Add
      </button>
    </div>
  );
};

export default TasksAdd;
