import React, { useState } from 'react'

import { TodoListItem } from './TodoListItem'
import { AddTodoForm } from './AddTodoForm'

const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false,
    },
    {
        text: 'Write app',
        complete: true,
    },
]

function App() {
    const [todos, setTodos] = useState(initialTodos)

    const toggleTodos = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                }
            }
            return todo
        })
        setTodos(newTodos)
    }

    const addTodo: AddTodo = (text: string) => {
        const newTodo = { text, complete: false }
        if (newTodo.text.length < 1) {
            alert('todo cannot be empty')
        } else {
            setTodos([...todos, newTodo])
        }
    }

    return (
        <>
            {todos.map(todo => (
                <TodoListItem todo={todo} toggleTodo={toggleTodos} />
            ))}
            <AddTodoForm addTodo={addTodo} />
        </>
    )
}

export default App
