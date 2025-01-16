import React from "react";

const StatisticsCard = ({ data, completedCount, failedCount, acceptedCount }) => {
  return data && (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mb-6">
      <div className="bg-blue-500 p-4 rounded-lg shadow">
        <h2 className="text-4xl font-bold">{data.taskCounts.newTask}</h2>
        <p className="text-lg">New Task</p>
      </div>
      <div className="bg-green-500 p-4 rounded-lg shadow">
        <h2 className="text-4xl font-bold">{completedCount}</h2>
        <p className="text-lg">Completed</p>
      </div>
      <div className="bg-yellow-500 p-4 rounded-lg shadow">
        <h2 className="text-4xl font-bold">{acceptedCount}</h2>
        <p className="text-lg">Accepted</p>
      </div>
      <div className="bg-red-500 p-4 rounded-lg shadow">
        <h2 className="text-4xl font-bold">{failedCount}</h2>
        <p className="text-lg">Failed</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
 