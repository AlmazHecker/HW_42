import React, {useState} from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import ChangeUserModal from '../ChangeUserModal/ChangeUserModal'
import Button from '../UI/Button/Button'

function RenderUsers(props){
    function onDelete(){
        props.onDelete(props.id)
    }

    const [DeleteUserModal, enableDeleteModal] = useState(false)
    function onCancel(){
        enableDeleteModal(false)
    }


    const [ChangeUser, enableChangeUser] = useState(false)
    function onChangeCancel(){
        enableChangeUser(false)
    }

    return(
        <>
            { ChangeUser && <ChangeUserModal id={props.id} onChangeUser={props.onChangeUser} onCancel={onChangeCancel}/>}
            { DeleteUserModal && <DeleteModal onDelete={onDelete} onCancel={onCancel} />}
            <li>
             {props.children}
              <Button onClick={() => enableDeleteModal(true)}>delete User</Button>
              <Button onClick={() => enableChangeUser(true)}>Change Name</Button>
            </li>
        </>
    )
}

export default RenderUsers;
