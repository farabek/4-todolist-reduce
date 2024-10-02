// import './App.css';
// import {
//   removeTaskAC,
//   addTaskAC,
//   tasksReducer,
//   changeTaskStatusAC,
//   changeFilterAC,
// } from './tasks-reducer';
// import { Todolist } from './Todolist';
// import { useReducer, useState } from 'react';
// import { v1 } from 'uuid';

// export type TaskType = {
//   id: string;
//   title: string;
//   isDone: boolean;
// };

// export type FilterValuesType = 'all' | 'active' | 'completed';

// function App() {
//   const [tasks, dispatch] = useReducer(tasksReducer, [
//     { id: v1(), title: 'HTML&CSS', isDone: true },
//     { id: v1(), title: 'JS', isDone: true },
//     { id: v1(), title: 'ReactJS', isDone: false },
//   ]);

//   // const [filter, setFilter] = useState<FilterValuesType>('all');

//   const removeTask = (taskId: string) => {
//     dispatch(removeTaskAC(taskId));
//   };

//   const addTask = (title: string) => {
//     dispatch(addTaskAC(title));
//   };

//   // const changeFilter = (filter: FilterValuesType) => {
//   //   setFilter(filter);
//   // };
//   const changeFilter = (filter: FilterValuesType) => {
//     dispatch(changeFilterAC(filter));
//   };

//   // const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
//   //   const newState = tasks.map((t) => (t.id === taskId ? { ...t, isDone: taskStatus } : t));
//   //   setTasks(newState);
//   // };
//   const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
//     dispatch(changeTaskStatusAC(taskId, taskStatus));
//   };

//   let tasksForTodolist = tasks;
//   if (filter === 'active') {
//     tasksForTodolist = tasks.filter((task) => !task.isDone);
//   }

//   if (filter === 'completed') {
//     tasksForTodolist = tasks.filter((task) => task.isDone);
//   }

//   return (
//     <div className="App">
//       <Todolist
//         title="What to learn"
//         tasks={tasksForTodolist}
//         removeTask={removeTask}
//         changeFilter={changeFilter}
//         addTask={addTask}
//         changeTaskStatus={changeTaskStatus}
//         filter={filter}
//       />
//     </div>
//   );
// }

// export default App;

// //

//////////////////////////////////////////////////

import './App.css';
import {
  removeTaskAC,
  addTaskAC,
  tasksReducer,
  changeTaskStatusAC,
  changeFilterAC,
} from './tasks-reducer';
import { Todolist } from './Todolist';
import { useReducer } from 'react';
import { v1 } from 'uuid';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = 'all' | 'active' | 'completed';

const initialState = {
  tasks: [
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ],
  filter: 'all' as FilterValuesType,
};

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const removeTask = (taskId: string) => {
    dispatch(removeTaskAC(taskId));
  };

  const addTask = (title: string) => {
    dispatch(addTaskAC(title));
  };

  const changeFilter = (filter: FilterValuesType) => {
    dispatch(changeFilterAC(filter));
  };

  const changeTaskStatus = (taskId: string, taskStatus: boolean) => {
    dispatch(changeTaskStatusAC(taskId, taskStatus));
  };

  let tasksForTodolist = state.tasks;
  if (state.filter === 'active') {
    tasksForTodolist = state.tasks.filter((task) => !task.isDone);
  }

  if (state.filter === 'completed') {
    tasksForTodolist = state.tasks.filter((task) => task.isDone);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={tasksForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
        addTask={addTask}
        changeTaskStatus={changeTaskStatus}
        filter={state.filter}
      />
    </div>
  );
}

export default App;
