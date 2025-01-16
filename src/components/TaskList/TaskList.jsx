import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ tasks, onTaskStatusChange, onAcceptTask }) => {
  return (
    <div id="tasklist" className="w-full max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Tasks </h1>

      {tasks &&
        tasks.map((task, index) => {
          if (task.active === true && !task.newTask) {
            return (
              <AcceptTask
                key={index}
                task={task}
                onTaskStatusChange={onTaskStatusChange}
              />
            );
          }
          if (task.newTask === true) {
            return (
              <NewTask
                key={index}
                task={task}
                onAcceptTask={onAcceptTask}
              />
            );
          }
          if (task.completed === true) {
            return <CompletedTask key={index} task={task} />;
          }
          if (task.failed === true) {
            return <FailedTask key={index} task={task} />;
          }
        })}
    </div>
  );
};

export default TaskList;
