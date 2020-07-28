import React from 'react'
import css from './TodoList.module.scss'
export default function TodoList({todoList,deleteTodo}) {
    return (
        <li className={css.wrap}>
                {todoList.text}
            <button onClick={()=> deleteTodo(todoList.id)}>-</button>
        </li>
    )
}
