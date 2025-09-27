import React from 'react';

const Task = ({progressData, completeTask, setCompleteTask, setInprogressCards, inProgressCards}) => {
    // console.log(data);
    const handleTask = () => {
        setInprogressCards([...inProgressCards, progressData])
        setCompleteTask([...completeTask, progressData])
        progressData.status = "Resolved"
        console.log(inProgressCards);

    }
    return (
        <div>
            <div className='p-4 bg-white rounded-md shadow-md w-full mt-[20px]'>
                <h1 className='font-semibold text-[20px]'>{progressData.title}</h1>
                <button onClick={handleTask} className='btn text-[16px] font-semibold bg-green-600/90 text-white w-full mt-[18px]'>Complete</button>
            </div>
        </div>
    );
};

export default Task;