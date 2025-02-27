import React from 'react'
import Header from '../other/Header'
import TasklistNumber from '../other/Tasklist'
import TaskList from '../Tasklist/TaskList'

const EmployeeDeshboard = (props) => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header changeuser={props.changeuser}  logindata={props.logindata}/>
      <TasklistNumber logindata={props.logindata} />
      <TaskList logindata={props.logindata} />
    </div>
  )
}

export default EmployeeDeshboard