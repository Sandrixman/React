import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {

    return (<ul>
        <li><TodoListItem label='Learn React' /></li>
        <li><TodoListItem important label='Build awesome app' /></li>
    </ul>);
}

export default TodoList;
