import React from 'react';
import Task from './Task'

const Tasks = ({inprogress, setCompleteTask, completeTask, setInprogressCards, inProgressCards, setInprogress}) => {
    const taskStatusData = inprogress.filter((element) => element.status == "In Progress")
    // console.log(inprogress);
    
    return (
        <div className='w-full'>
            {
                inprogress.length == 0 ? <p className='mt-8 ml-5 text-gray-500 text-[18px]'>Select a ticket to add to Task Status</p> : taskStatusData.map(progressData => <Task key={progressData.id} 
                    progressData={progressData} 
                    setCompleteTask={setCompleteTask} 
                    completeTask={completeTask}
                    inProgressCards={inProgressCards}
                    setInprogressCards={setInprogressCards}
                    inprogress={inprogress}
                    setInprogress={setInprogress}
                    ></Task>)
            }
            
        </div>
    );
};

export default Tasks;