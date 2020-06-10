import React from 'react'
import './GoalList.css'
const GoalList = (props) => {
    console.log(props)
    const {courseGoals} = props;
    return(
        <ul className="goal-list">
            {courseGoals.map((item) => {
                return(
                <li key={item.id}>{item.text}</li>
                )
            })}
      </ul>
    )
}
export default GoalList;