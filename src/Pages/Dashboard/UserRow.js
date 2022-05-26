import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
    const { email,role} = user;
    const makeAdmin = () =>{
        fetch(`https://mighty-basin-34792.herokuapp.com/user/admin/${email}`,{
            method: 'put',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            toast.success(`Successfully made an admin`);
        })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove User</button></td>
      </tr>
    );
};

export default UserRow;