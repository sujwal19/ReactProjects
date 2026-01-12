import Header from "../../other/Header";
import TaskListNumbers from "../../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen bg-[#1C1C1C] p-10 text-white">
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
