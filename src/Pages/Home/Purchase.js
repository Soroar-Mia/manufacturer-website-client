import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;