import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const { userdata } = useContext(AuthContext);

  if (!userdata?.employees) {
    return <div className="text-white p-5">No Employees Found!</div>;
  }

  return (
    <div className="bg-[#1c1c1c] p-5 px-2 mt-5 rounded h-48 ">
      {/* Header Row */}
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2 gap-2">
        <h2 className="bg-red-600 w-1/5 px-12">Employee Name</h2>
        <h3 className="bg-red-600 w-1/5 px-12">New Task</h3>
        <h5 className="bg-red-600 w-1/5 px-12">Active Task</h5>
        <h5 className="bg-red-600 w-1/5 px-12">Completed</h5>
        <h5 className="bg-red-600 w-1/5 px-12">Failed</h5>
      </div>

      {/* Employees List */}
      <div className="h-[80%] overflow-auto">
        {userdata.employees.map((elem, i) => (
          <div
            key={elem.id || i}
            className="py-2 px-4 flex justify-between rounded gap-2 text-red-300 border-2 border-emerald-200"
          >
            <h2 className="w-1/5 text-red-600 px-12">{elem.firstName}</h2>
            <h3 className="w-1/5 text-green-600 px-12">
              {elem?.taskNumbers?.newTask ?? 0}
            </h3>
            <h5 className="text-pink-500 w-1/5 px-12">
              {elem?.taskNumbers?.active ?? 0}
            </h5>
            <h5 className="text-blue-200 w-1/5 px-12">
              {elem?.taskNumbers?.completed ?? 0}
            </h5>
            <h5 className="text-red-600 w-1/5 px-12">
              {elem?.taskNumbers?.failed ?? 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
