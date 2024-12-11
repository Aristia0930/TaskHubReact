import React, { useState } from 'react';
import cn from 'classnames';
import { MdCheckBoxOutlineBlank,MdCheckBox,MdRemoveCircleOutline,MdOutlineCancel,MdOutlineCheckBox } from 'react-icons/md'
import { FiEdit3 } from "react-icons/fi";
import '.././style/TodoListItem.scss'

const TodoListItem = ({todo,onRemove,onToggle,modify,style}) => {
    const {id,text,checked}=todo;
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const handleModify = () => {
        modify(id, editedText); // 수정 내용을 부모 컴포넌트로 전달
        setIsEditing(false); // 수정 모드 종료
      };
  
    return (
        <div className='TodoListItem-virtualized' style={style}>
        <div className='TodoListItem'>
            {isEditing ?(
                <div className='editMode'>
                         <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                        />
                        <div className='editButtons'>
                        <div className='editButton' onClick={handleModify}><MdOutlineCheckBox/></div>
                        <div className='editButton' onClick={() => setIsEditing(false)}><MdOutlineCancel/> </div>
                        </div>
                        </div>
            ):

           ( <>
           <div className={cn('checkbox',{checked})} onClick={()=>onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                
                <div className='text'>{text}</div>

            </div>
            <div className='modify' onClick={()=>setIsEditing(true)}>
                <FiEdit3 />
            </div>
            <div className='remove' onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
            </>)}
            
        </div></div>
    );
};

export default React.memo(TodoListItem);