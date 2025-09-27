import React from 'react';

const Resolved = ({solved, completeTask, }) => {
    console.log(completeTask);
    // console.log(task);
    return (
        <div>
            <div className='bg-[#E0E7FF] py-3.5 px-2.5 rounded-md mt-3.5'>
                <h1 className='font-semibold '>{solved.title}</h1>
            </div>
        </div>
    );
};

export default Resolved;