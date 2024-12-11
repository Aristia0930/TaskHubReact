import React, { useCallback } from 'react';
import {List} from 'react-virtualized'
import TodoListItem from './TodoListItem';
import '.././style/TodoList.scss';
const TodoList = ({todos,onRemove,onToggle,modify}) => {
    
    const rowRenderer = useCallback(({index,key,style})=>{
        const todo = todos[index]
        return(
            <TodoListItem todo={todo} key={todo.id} 
            onRemove={onRemove} onToggle={onToggle} 
            style={style}
            modify={modify}/>
        )
    },[onRemove,onToggle,modify,todos])
    
    
    return (
        <List className='TodoList'
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{outline:'none'}}
        >

  
        </List>
    );
};

export default React.memo(TodoList);