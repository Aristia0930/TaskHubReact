import React from 'react';
import TodoListItem from './TodoListItem';
import '.././style/TodoList.scss';
const TodoList = ({todos,onRemove,onToggle,modify}) => {
    return (
        <div className='TodoList'>
            {todos.map(todo=>(
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} modify={modify}/>
            ))}

            
        </div>
    );
};

export default TodoList;