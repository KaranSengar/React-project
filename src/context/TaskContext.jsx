import React, { useEffect } from 'react'
import { getlocalStorage } from '../utills/localstorage'
const TaskContext = ({children}) => {


  return (
    <div>{children}</div>
  )
}
 
export default TaskContext