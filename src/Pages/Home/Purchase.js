import React from 'react';

const Purchase = () => {
    return (
        <div>
            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;