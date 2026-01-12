import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[60%] w-full flex items-center justify-start gap-5 mt-10 flex-nowrap py-5 overflow-x-auto"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />;
        }
        if (elem.newTask) {
          return <AcceptTask key={idx} />;
        }
        if (elem.completed) {
          return <AcceptTask key={idx} />;
        }
        if (elem.failed) {
          return <AcceptTask key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
