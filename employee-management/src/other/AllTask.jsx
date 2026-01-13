import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-5">
      <div className="bg-cyan-700 rounded mb-2 flex px-2 py-3 items-center justify-between">
        <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium ">New Task</h3>
        <h3 className="w-1/5 text-lg font-medium ">Active</h3>
        <h4 className="w-1/5 text-lg font-medium ">Completed</h4>
        <h4 className="w-1/5 text-lg font-medium ">Failed</h4>
      </div>
      <div className="">
        {userData.map((elem, key) => {
          return (
            <div
              key={key}
              className="border border-cyan-800 rounded mb-2 flex px-2 py-3 items-center justify-between "
            >
              <h2 className="w-1/5 text-lg font-medium">{elem.firstName}</h2>
              <h3 className="w-1/5 text-lg font-medium text-blue-300">
                {elem.taskCounts.newTask}
              </h3>
              <h3 className="w-1/5 text-lg font-medium text-yellow-400">
                {elem.taskCounts.active}
              </h3>
              <h4 className="w-1/5 text-lg font-medium text-green-500">
                {elem.taskCounts.completed}
              </h4>
              <h4 className="w-1/5 text-lg font-medium text-red-400">
                {elem.taskCounts.failed}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
