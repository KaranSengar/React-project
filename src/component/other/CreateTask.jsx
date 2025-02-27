import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, settitle] = useState("");
  const [taskdes, settaskdes] = useState("");
  const [taskdate, settaskdate] = useState("");
  const [agisn, setagisn] = useState("");
  const [category, setcategory] = useState("");

  const { userdata, setuserdata } = useContext(AuthContext);

  const handlersubmit = (e) => {
    e.preventDefault();

  
    const newTask = {
      taskTitle,
      taskdes,
      taskdate,
      category,
      active: false,
      newtask: true,
      failed: false,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    const updatedEmployees = data.map((elem) => {
      if (agisn.trim().toLowerCase() === elem.firstName.trim().toLowerCase()) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask], // Task ko push karna
          newTask: (elem.newTask || 0) + 1, // Task count increase karna
        };
      }
      return elem;
    });

    setuserdata(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Reset fields
    setagisn("");
    settitle("");
    setcategory("");
    settaskdate("");
    settaskdes("");
  };

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form className="flex w-full items-start justify-between flex-wrap" onSubmit={handlersubmit}>
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4"
                type="text"
                placeholder="Make a UI design"
                value={taskTitle}
                onChange={(e) => settitle(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4"
                type="date"
                value={taskdate}
                onChange={(e) => settaskdate(e.target.value)}
              />
              <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4"
                type="text"
                placeholder="Employee name"
                value={agisn}
                onChange={(e) => setagisn(e.target.value)}
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4"
                type="text"
                placeholder="design, dev, etc"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              />
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="text-sm py-1 px-2 w-full h-44 rounded outline-none bg-transparent border-[1px]"
              cols="30"
              rows="10"
              value={taskdes}
              onChange={(e) => settaskdes(e.target.value)}
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
