import React, {useState, useReducer} from "react";
import Todo from "./Todo";

// const ACTION = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }

// function reducer(state, action) {
//     switch (action.type) {
//         case ACTION.INCREMENT: 
//             return {count: state.count + 1}
//         case ACTION.DECREMENT: 
//             return {count: state.count - 1}
//         default:
//             return state
//     }
// }

// export default function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, {count: 0 })

//     function increment() {
//         dispatch({ type: ACTION.INCREMENT })
//     }

//     function decrement() {
//         dispatch({ type: ACTION.DECREMENT })
//     }
//     return (
//         <div className="cont">
//             <button className="task-button" onClick={decrement}>-</button>
//             <span className="value-print">{state.count}</span>
//             <button className="task-button" onClick={increment}>+</button>
//         </div>
//     )
// }

export const ACTION = {
    ADD_TODO: 'add_todo',
    TOGGLE_TODO: 'toggle_todo',
    DELETE_TODO: 'delete_todo'
}

function reducer(todos, action) {
    switch (action.type){
        case ACTION.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTION.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTION.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id )
        default: 
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name , complete: false }
}

export default function UseReducer() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName ] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTION.ADD_TODO, payload: { name: name }})
        setName('')
    }

    console.log(todos)

    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            className="input-form"
            >
            <input type="text" value={name} className="input-box"
            onChange={e => setName(e.target.value)} />
            </form>
            {todos.map(todo => {
               return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            })}
        </div>
    )
}