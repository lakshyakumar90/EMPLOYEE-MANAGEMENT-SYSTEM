import React from "react";

const AllTasks = ({ employees }) => {
  if (!employees || employees.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No data available.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Employee Task Summary
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-900 text-white">
            <th className="border border-gray-700 px-4 py-3 text-left">
              Employee Name
            </th>
            <th className="border border-gray-700 px-4 py-3">Active Tasks</th>
            <th className="border border-gray-700 px-4 py-3">New Tasks</th>
            <th className="border border-gray-700 px-4 py-3">Completed Tasks</th>
            <th className="border border-gray-700 px-4 py-3">Failed Tasks</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              className={`${
                index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
              } hover:bg-gray-500 transition-colors duration-200`}
            >
              <td className="border border-gray-700 px-4 py-3 text-gray-200 font-medium">
                {employee.firstName}
              </td>
              <td className="border border-gray-700 px-4 py-3 text-center text-green-400 font-semibold">
                {employee.taskCounts.active}
              </td>
              <td className="border border-gray-700 px-4 py-3 text-center text-blue-400 font-semibold">
                {employee.taskCounts.newTask}
              </td>
              <td className="border border-gray-700 px-4 py-3 text-center text-purple-400 font-semibold">
                {employee.taskCounts.completed}
              </td>
              <td className="border border-gray-700 px-4 py-3 text-center text-red-400 font-semibold">
                {employee.taskCounts.failed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTasks;
