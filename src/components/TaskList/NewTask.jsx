import React from "react";
import useColors from "../../utils/useColors";

const NewTask = ({ task, onAcceptTask }) => {
  const { taskBgColor, priorityBgColor } = useColors(task);

  return (
    <div className={`${taskBgColor ? taskBgColor : "bg-emerald-500"} p-4 rounded-lg shadow mb-4`}>
      <div className="flex justify-between items-center mb-2">
        <span
          className={`${priorityBgColor ? priorityBgColor : "bg-emerald-600"} text-xs font-bold uppercase px-2 py-1 rounded`}
        >
          {task.priority}
        </span>
        <span className="text-sm">{task.taskDate}</span>
      </div>
      <h3 className="text-lg font-bold">{task.taskTitle + "  (" + task.category + ")"}</h3>
      <p className="text-sm">
        {task.taskDescription}
      </p>
      <div className="mt-3">
        <button
          className="px-3 py-1 rounded-lg bg-green-600 text-sm"
          onClick={() => onAcceptTask(task.taskTitle)}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
