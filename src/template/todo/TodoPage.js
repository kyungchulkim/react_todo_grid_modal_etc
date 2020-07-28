import React, { useState } from 'react'
import PageWrap from '../PageWrap'
import TodoInput from '../../component/todo/TodoInput'
import TodoList from '../../component/todo/TodoList'
import css from './TodoPage.module.scss'

export default function TodoPage() {
    const [todoList, setTodoList] = useState([])

    function addTodo(list) {
        setTodoList([...todoList, {
            id: todoList.length === 0 ? 1 :
                todoList[todoList.length - 1].id + 1, text: list
        }])
    }

    function deleteTodo(id) {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    return (
        <PageWrap title={'Todo'}>
            {todoList.length !== 0 &&
                <ul className={css.borderWrap}>
                    {todoList.map((todo, index) => {
                        return <TodoList todoList={todo} key={index} deleteTodo={deleteTodo} />
                    })}
                </ul>
            }
            <TodoInput addTodo={addTodo} />
        </PageWrap>
    )
}
