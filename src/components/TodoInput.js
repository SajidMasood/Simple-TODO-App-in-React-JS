import React, { useState } from 'react'

function TodoInput(props){

    const [inputText, setInputText] = useState('');
    // for press enter key
    const handleEnterPress = (e)=>{
        if (e.keyCode === 13) {
            props.addList(inputText)
            setInputText("")
        }
    }
    return (
        <div className="input-container">
            <input type="text" className='input-box-todo' 
            placeholder='Enter Your Todo' 
            value={inputText}
            onKeyDown={handleEnterPress}
            onChange={e=>{setInputText(e.target.value)}}/>

            <button className='add-btn' onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }}>+</button>

           
        </div>
    )
}


export default TodoInput