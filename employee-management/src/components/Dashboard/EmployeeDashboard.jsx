import Header from "../../other/Header";
import TaskListNumbers from "../../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="h-screen bg-[#1C1C1C] p-10 text-white">
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
