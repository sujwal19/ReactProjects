import Header from "../../other/Header";
import TaskListNumbers from "../../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  console.log(data);

  return (
    <div className="h-screen bg-[#1C1C1C] p-10 text-white">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
