import { useContext } from 'react'
import { UserContext } from '../components/context/UserProvider'
import UserEdit from '../components/forms/UserEdit'

function EditProfile() {
    const { user } = useContext(UserContext)
    return (
        <>
            <h2>Editing Profile for {user.user.username}</h2>
            <UserEdit />
        </>
    )
}

export default EditProfile