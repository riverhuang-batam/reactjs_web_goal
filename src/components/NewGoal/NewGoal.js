import React, {useState} from 'react'
import './NewGoal.css'
const NewGoal = (props) => {
    const [text, setText] = useState('')
    const submitForm = (e) => {
        e.preventDefault()
        const newGoal ={
            id: Math.random(),
            text: text
        }
        setText('')
        props.addGoal(newGoal)
    }
    const textChange = (e) => {
        setText(e.target.value)
    }
    return(
        <form className="new-goal" onSubmit={submitForm}>
            <input type="text" value={text} placeholder="Add New Goals" onChange={textChange}/>
            <button type="submit">Add Goal</button>
        </form>
    )
}
export default NewGoal;