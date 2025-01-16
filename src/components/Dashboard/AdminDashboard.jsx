import React, { useState } from "react";
import Header from "../Partials/Header";
import CreateTask from "../Partials/CreateTask";
import AllTasks from "../Partials/AllTasks";

const AdminDashboard = ({ func, data, employees, updateEmployees }) => {
  return (
    <div className="bg-zinc-900 text-gray-200 min-h-screen flex flex-col">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto pt-6 flex justify-between items-center">
        <Header func={func} data={data} />
      </div>

      {/* Main Section */}
      <div className="w-full max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Section */}
        <CreateTask employees={employees} updateEmployees={updateEmployees} />

        {/* Task Cards Section */}
        <AllTasks employees={employees} updateEmployees={updateEmployees} />
      </div>
    </div>
  );
};

export default AdminDashboard;
