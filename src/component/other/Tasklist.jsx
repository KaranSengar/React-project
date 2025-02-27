import React from "react";

const TasklistNumber = ({logindata}) => {
  console.log(logindata?.taskNumbers)
  console.log(logindata)
  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="rounded-xl w-[45%] bg-red-400 p-6 px-9">
        <h2 className="text-3xl font-semibold">
        {logindata?.taskNumbers?.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] bg-green-400 p-6 px-9">
        <h2 className="text-3xl font-semibold">{logindata?.taskNumbers?.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task Task</h3>
      </div>
      <div className="rounded-xl w-[45%] bg-blue-400 p-6 px-9">
        <h2 className="text-3xl font-semibold">{logindata?.taskNumbers?.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[45%] bg-yellow-300 p-6 px-9">
        <h2 className="text-3xl font-semibold">{logindata?.taskNumbers?.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TasklistNumber;
