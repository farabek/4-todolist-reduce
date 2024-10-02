// import { v1 } from 'uuid';
// import { FilterValuesType, TaskType } from './App';

// const initialState: TaskType[] = [
//   { id: v1(), title: 'HTML&CSS', isDone: true },
//   { id: v1(), title: 'JS', isDone: true },
//   { id: v1(), title: 'ReactJS', isDone: false },
// ];

// export const tasksReducer = (state: TaskType[] = initialState, action: ActionsType): TaskType[] => {
//   switch (action.type) {
//     case 'REMOVE-TASK':
//       return state.filter((task) => task.id !== action.payload.id);

//     case 'ADD-TASK':
//       const newTask = {
//         id: v1(),
//         title: action.payload.title,
//         isDone: false,
//       };
//       return [newTask, ...state];

//     case 'CHANGE-TASK-STATUS':
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, isDone: action.payload.isDone } : task,
//       );

//     case 'CHANGE-FILTER':
//       return {
//         ...state,
//         filter: action.payload.filter,
//       };

//     default:
//       return state;
//   }
// };

// // Action creators
// export const removeTaskAC = (id: string): RemoveTaskActionType => {
//   return {
//     type: 'REMOVE-TASK',
//     payload: {
//       id: id,
//     },
//   } as const;
// };

// export const addTaskAC = (title: string): AddTaskActionType => {
//   return {
//     type: 'ADD-TASK',
//     payload: {
//       title,
//     },
//   } as const;
// };

// export const changeTaskStatusAC = (id: string, isDone: boolean): ChangeTaskStatusActionType => {
//   return {
//     type: 'CHANGE-TASK-STATUS',
//     payload: {
//       id,
//       isDone,
//     },
//   } as const;
// };

// export const changeFilterAC = (filter: FilterValuesType): ChangeFilterActionType => {
//   return {
//     type: 'CHANGE-FILTER',
//     payload: {
//       filter,
//     },
//   } as const;
// };

// // Action types
// type RemoveTaskActionType = {
//   type: 'REMOVE-TASK';
//   payload: {
//     id: string;
//   };
// };

// type AddTaskActionType = {
//   type: 'ADD-TASK';
//   payload: {
//     title: string;
//   };
// };

// type ChangeTaskStatusActionType = {
//   type: 'CHANGE-TASK-STATUS';
//   payload: {
//     id: string;
//     isDone: boolean;
//   };
// };

// type ChangeFilterActionType = {
//   type: 'CHANGE-FILTER';
//   payload: {
//     filter: FilterValuesType;
//   };
// };

// // Действия, которые будут обрабатываться редьюсером
// type ActionsType =
//   | RemoveTaskActionType
//   | AddTaskActionType
//   | ChangeTaskStatusActionType
//   | ChangeFilterActionType;

// //
////////////////////////////////////////////////////////

import { v1 } from 'uuid';
import { TaskType, FilterValuesType } from './App';

// Initial tasks state
// const initialState: { tasks: TaskType[]; filter: FilterValuesType } = {
//   tasks: [
//     { id: v1(), title: 'HTML&CSS', isDone: true },
//     { id: v1(), title: 'JS', isDone: true },
//     { id: v1(), title: 'ReactJS', isDone: false },
//   ],
// filter: 'all' as FilterValuesType,
// };

// Reducer function
export const tasksReducer = (
  state: { tasks: TaskType[]; filter: FilterValuesType },
  action: ActionsType,
): { tasks: TaskType[]; filter: FilterValuesType } => {
  switch (action.type) {
    case 'REMOVE-TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload.id) };

    case 'ADD-TASK':
      const newTask = { id: v1(), title: action.payload.title, isDone: false };
      return { ...state, tasks: [newTask, ...state.tasks] };

    case 'CHANGE-TASK-STATUS':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: action.payload.isDone } : task,
        ),
      };

    case 'CHANGE-FILTER':
      return {
        ...state,
        filter: action.payload.filter,
      };

    default:
      return state;
  }
};

// Action creators
export const removeTaskAC = (id: string): RemoveTaskActionType =>
  ({
    type: 'REMOVE-TASK',
    payload: { id },
  } as const);

export const addTaskAC = (title: string): AddTaskActionType =>
  ({
    type: 'ADD-TASK',
    payload: { title },
  } as const);

export const changeTaskStatusAC = (id: string, isDone: boolean): ChangeTaskStatusActionType =>
  ({
    type: 'CHANGE-TASK-STATUS',
    payload: { id, isDone },
  } as const);

export const changeFilterAC = (filter: FilterValuesType): ChangeFilterActionType =>
  ({
    type: 'CHANGE-FILTER',
    payload: { filter },
  } as const);

// Action types
type RemoveTaskActionType = {
  type: 'REMOVE-TASK';
  payload: { id: string };
};

type AddTaskActionType = {
  type: 'ADD-TASK';
  payload: { title: string };
};

type ChangeTaskStatusActionType = {
  type: 'CHANGE-TASK-STATUS';
  payload: { id: string; isDone: boolean };
};

type ChangeFilterActionType = {
  type: 'CHANGE-FILTER';
  payload: { filter: FilterValuesType };
};

// Combined action types
type ActionsType =
  | RemoveTaskActionType
  | AddTaskActionType
  | ChangeTaskStatusActionType
  | ChangeFilterActionType;
