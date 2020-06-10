import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {
        id: 1,
        text: 'Finish the Course'
    },
    {
        id: 2,
        text: 'Learn all about the Course Main Topic'
    },
    {
        id: 3,
        text: 'Help other students in the course Q&amp;A'
    }
])
  
const addNewGoalHandler = (newGoal) => {
  // setCourseGoals(console.log(courseGoals.concat(newGoal)))
  setCourseGoals((prevState) => prevState.concat(newGoal))
}
  return (
    <div>
      <h2 className="course-goals">Course Goals</h2>
      <NewGoal addGoal={addNewGoalHandler}/>
      <GoalList courseGoals={courseGoals}/>
    </div>
  );
}

export default App;
