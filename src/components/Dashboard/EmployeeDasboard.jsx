import React, { useState, useEffect } from "react";
import Header from "../Partials/Header";
import StatisticsCard from "../Partials/StatisticsCard";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ func, data }) => {
  const [tasks, setTasks] = useState(data.tasks);
  const [completedCount, setCompletedCount] = useState(data.taskCounts.completed);
  const [failedCount, setFailedCount] = useState(data.taskCounts.failed);
  const [acceptedCount, setAcceptedCount] = useState(data.taskCounts.accepted);

  // Retrieve tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
      const completed = storedTasks.filter((task) => task.completed).length;
      const failed = storedTasks.filter((task) => task.failed).length;
      const accepted = storedTasks.filter((task) => task.active && !task.newTask).length;
      setCompletedCount(completed);
      setFailedCount(failed);
      setAcceptedCount(accepted);
    }
  }, []);

  // Update task status in localStorage and state
  const onTaskStatusChange = (taskTitle, status) => {
    const updatedTasks = tasks.map((task) =>
      task.taskTitle === taskTitle
        ? { ...task, [status]: true, active: status === "completed" || status === "failed" ? false : task.active }
        : task
    );

    // Update task counts
    const completed = updatedTasks.filter((task) => task.completed).length;
    const failed = updatedTasks.filter((task) => task.failed).length;
    const accepted = updatedTasks.filter((task) => task.active && !task.newTask).length;

    // Update localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Update the state
    setTasks(updatedTasks);
    setCompletedCount(completed);
    setFailedCount(failed);
    setAcceptedCount(accepted);
  };

  // Handle task acceptance from NewTask component
  const onAcceptTask = (taskTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.taskTitle === taskTitle
        ? { ...task, newTask: false, active: true }
        : task
    );

    // Update accepted count
    const updatedAcceptedCount = updatedTasks.filter((task) => task.active && !task.newTask).length;

    // Update localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Update the state
    setTasks(updatedTasks);
    setAcceptedCount(updatedAcceptedCount);
  };

  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen p-6 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-4xl">
        <Header func={func} data={data} />
      </div>

      {/* Statistics Cards */}
      <StatisticsCard
        data={data}
        completedCount={completedCount}
        failedCount={failedCount}
        acceptedCount={acceptedCount}
      />

      {/* Task Cards */}
      <TaskList tasks={tasks} onTaskStatusChange={onTaskStatusChange} onAcceptTask={onAcceptTask} />
    </div>
  );
};

export default EmployeeDashboard;
