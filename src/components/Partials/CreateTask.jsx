import React, { useState } from "react";

const CreateTask = ({ employees, updateEmployees }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTaskTitle(value);
        break;
      case "description":
        setTaskDescription(value);
        break;
      case "date":
        setTaskDate(value);
        break;
      case "assignTo":
        setAsignTo(value);
        break;
      case "category":
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create task object
    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      priority: "Medium",
      taskTitle: taskTitle,
      taskDescription: taskDescription,
      taskDate: taskDate,
      category: category,
    };

    // Assign task to the matching employee
    const updatedEmployees = employees.map((employee) => {
      if (employee.firstName.toLowerCase() === asignTo.toLowerCase()) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: (employee.taskCounts.newTask || 0) + 1,
          },
        };
      }
      return employee;
    });

    // Save updated employees back to localStorage
    updateEmployees(updatedEmployees);

    // Reset form fields
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6">Create Task</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-bold mb-2">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={taskTitle}
            onChange={handleChange}
            placeholder="Task Title"
            required
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={taskDescription}
            onChange={handleChange}
            placeholder="Task Description"
            required
            rows="4"
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={taskDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="assignTo" className="block text-sm font-bold mb-2">
            Assign To
          </label>
          <input
            type="text"
            id="assignTo"
            name="assignTo"
            value={asignTo}
            onChange={handleChange}
            placeholder="Employee Name"
            required
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={handleChange}
            placeholder="Design, Development, etc."
            required
            className="w-full px-4 py-2 bg-zinc-700 text-gray-200 border border-zinc-600 rounded-lg focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
