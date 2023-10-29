import React, { createContext, useState } from "react"

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [taskData, setTaskData] = useState([])

  const updateTaskCompletion = (id, isCompleted) => {
    setTaskData(prevData => {
      return prevData.map(task => {
        if (task._id === id) {
          return { ...task, completed: isCompleted }
        }
        return task
      })
    })
  }

  return (
    <TaskContext.Provider value={{ taskData, updateTaskCompletion }}>
      {children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProvider }