// src/redux/reducers.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK, SET_FILTER, SET_SORT } from './actions';

const initialState = {
  tasks: [],
  filter: 'ALL',
  sort: 'DUEDATE',
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_SORT:
      return { ...state, sort: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
