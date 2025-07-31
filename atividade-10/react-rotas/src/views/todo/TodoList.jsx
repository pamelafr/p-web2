import React from 'react'
import IconButton from '../template/IconButton'
import alunos from './alunos'



const TodoList = props => {
    const renderRows = () => {
        const list = alunos || []
        console.log(alunos)
        console.log(props.list)
        return list.map(todo => (
            <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>
                    <IconButton btnStyle='danger' icon='trash-o' onClick={() => props.handleRemove(todo)}/>
                </td>
            </tr>
        )) 
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList