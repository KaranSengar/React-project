import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Completed from "./Complete";
import FailTask from "./FailTask";

const TaskList = ({ logindata }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto py-5"
    >
    {
        logindata.tasks.map((item ,id)=>{
            if(item.active){
                return <AcceptTask logindata={item} key={id}/>
            }
            if(item.newTask){
                return <NewTask key={id} logindata={item} />
            }
            if(item.Completed){
                return <Completed  key={id} logindata={item} />
            }
            if(item.active){
                return <FailTask key={id} logindata={item} />
            }
        })
    }
   
    </div>
  );
};

export default TaskList;
