import React from 'react';
import { Provider} from 'react-redux';
import store from './store';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import FilterSortControls from './FilterSortControls';
import { useEffect } from 'react';
import './App.css'


function App() {
 

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        {/* <TaskForm/> */}
        <FilterSortControls/>
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
