import React from "react";

const AcceptTask = ({ logindata }) => {
  return (
    <div className="flex-shrink-0 h-full w-[400px] bg-red-400 rounded-xl py-5 px-5 ">
      <div className="flex justify-between  items-center ">
        <h3 className="bg-red-600 px-3 py-1 rounded">{logindata.category}</h3>
        <h4 className="text-sm">{logindata.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{logindata.taskTitle}</h2>
      <p className="text-sm mt-2">{logindata.taskDescription}</p>
      <div className="flex  mt-10 justify-between">
        <button className="bg-green-500 py-1 px-2 text-sm">
          Mark as Completed Accepeted
        </button>
        <button className="bg-red-500 py-1 px-2 text-sm">Mark is Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
