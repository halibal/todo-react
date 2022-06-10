import React from 'react';

function List(props) {
    return (
        <div className='list-container'>
            <ul className='list-group'>
                {
                    props.todoRegister.map(todoRegister => {
                        return (
                            <li className='list-group-item'>
                                <div>O</div>
                                <p>{todoRegister.todoInput}</p>
                                <div>X</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;