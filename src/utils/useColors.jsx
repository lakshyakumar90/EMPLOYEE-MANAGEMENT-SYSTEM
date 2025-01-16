const useColors = (task) => {
  let taskBgColor = "";
  let priorityBgColor = "";
  if (task.priority === "High") {
    priorityBgColor = "bg-red-600";
    taskBgColor = "bg-red-500";
  } else if (task.priority === "Medium") {
    priorityBgColor = "bg-blue-600";
    taskBgColor = "bg-blue-500";
  } else if (task.priority === "Low") {
    priorityBgColor = "bg-green-600";
    taskBgColor = "bg-green-500";
  }
  return {taskBgColor, priorityBgColor};
};

export default useColors;
