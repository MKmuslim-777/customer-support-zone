import React from 'react';
import Resolved from './Resolved';

const Resolveds = ({inprogress, completeTask, setCompleteTask}) => {
    // console.log(inprogress);
    // console.log(completeTask);
    return (   
        <div>
            {
                completeTask.length == 0 ? <p className='mt-8 ml-5 text-gray-500 text-[18px]'>No resolved tasks yet.</p> : completeTask.map(solved => <Resolved key={solved.id} completeTask={completeTask} setCompleteTask={setCompleteTask} solved={solved}></Resolved>)
            }
        </div>
    );
};

export default Resolveds;