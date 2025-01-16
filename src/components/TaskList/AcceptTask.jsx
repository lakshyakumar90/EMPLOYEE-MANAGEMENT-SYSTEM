import useColors from "../../utils/useColors";

const AcceptTask = ({ task, onTaskStatusChange }) => {
  const { taskBgColor, priorityBgColor } = useColors(task);
  return (
    <div className={`${taskBgColor} p-4 rounded-lg shadow mb-4`}>
      <div className="flex justify-between items-center mb-2">
        <span
          className={`${priorityBgColor} text-xs font-bold uppercase px-2 py-1 rounded`}
        >
          {task.priority}
        </span>
        <span className="text-sm">{task.taskDate}</span>
      </div>
      <h3 className="text-lg font-bold">
        {task.taskTitle + "  (" + task.category + ")"}
      </h3>
      <p className="text-sm">{task.taskDescription}</p>
      <div className="flex items-center gap-3 mt-3">
        <button
          className="px-3 py-1 rounded-lg bg-green-600 text-sm"
          onClick={() => onTaskStatusChange(task.taskTitle, "completed")}
        >
          Mark as Completed
        </button>
        <button
          className="px-3 py-1 rounded-lg bg-red-600 text-sm"
          onClick={() => onTaskStatusChange(task.taskTitle, "failed")}
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
