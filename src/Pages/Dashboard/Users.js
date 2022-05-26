import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';


const Users = () => {
 /*  const {data: users, isLoding} = useQuery('users', () => fetch('http://localhost:5000/user').then(res=>res.json()))
   if(isLoding) {
       return <Loading></Loading>
   }*/

   const [users, setUsers] = useState([]);

   useEffect( ()=>{
       fetch('https://mighty-basin-34792.herokuapp.com/user')
       .then(res => res.json())
       .then(data => setUsers(data));
   }, [])

    return (
        <div>
            <h2 className="text-2xl text-indigo-800">All Users</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {
                users.map(user => <UserRow
                    key={user._id}
                    user={user}
                >
                </UserRow>)
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;