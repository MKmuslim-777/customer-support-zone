import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


const Task = ({progressData, completeTask, setCompleteTask, setInprogressCards, inProgressCards, inprogress, setInprogress}) => {
    // console.log(data);

    
    const handleTask = () => {
        toast("Resolved");
        setInprogressCards([...inProgressCards, progressData]);
        console.log(inProgressCards);
        setCompleteTask([...completeTask, progressData]);
        console.log(completeTask);
        progressData.status = "Resolved";
        const findData = inprogress.find(ele => ele.id == progressData.id);
        setInprogress([...inprogress, findData])
        console.log(inprogress);
        // console.log(findData);
        // console.log(inProgressCards);
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