const TaskListNumbers = () => {
  return (
    <div className="flex max-w-screen justify-between gap-5">
      <div className="bg-red-500 w-[45%] px-6 py-9 rounded-xl mt-10">
        <h2 className="text-2xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-green-500 w-[45%] px-6 py-9 rounded-xl mt-10">
        <h2 className="text-2xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="bg-blue-500 w-[45%] px-6 py-9 rounded-xl mt-10">
        <h2 className="text-2xl font-semibold">4</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="bg-yellow-500 w-[45%] px-6 py-9 rounded-xl mt-10">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
