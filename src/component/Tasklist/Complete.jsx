import React from "react";

const Completed = ({logindata}) => {
  return (
    <div className="flex-shrink-0 h-full w-[400px] bg-green-400 rounded-xl py-5 px-5 ">
    <div className="flex justify-between  items-center ">
      <h3 className="bg-yellow-600 px-3 py-1 rounded">{logindata.category}</h3>
      <h4 className="text-sm">{logindata.taskDate} </h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold">{logindata.taskTitle}</h2>
    <p className="text-sm mt-2">
    {logindata.taskDescription}
    </p>
    <div className="mt-10">
        <button className="bg-red-500 py-1 px-2 text-sm">Completed Task</button>
    </div>
  </div>
  );
};

export default Completed;
