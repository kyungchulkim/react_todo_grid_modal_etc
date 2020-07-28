import React, { useState } from 'react'
import css from './TodoInput.module.scss';
export default function TodoInput({ addTodo }) {
    const placeholder = `What needs to be done?`;
    const [todo, setTodo] = useState('')

    return (
        <div className={css.wrap}>
            <input type={'text'} placeholder={placeholder} value={todo} onChange={(e)=> setTodo(e.target.value)}/>
            <button onClick={()=> todo !== '' && (addTodo(todo),setTodo(''))}>+</button>
        </div>
    )
}
