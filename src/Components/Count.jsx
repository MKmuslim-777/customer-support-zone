import React, { use } from 'react';
import bgLeft from "../assets/vector1.png"
import bgRight from "../assets/right.png"

const Count = ({inprogress, completeTask, fetchPromise}) => {

    const fetchData = use(fetchPromise)
    const inprogressData = fetchData.filter((element) => element.status == "In Progress")
    // console.log(inprogressData);
    return (
        <div className='container-size grid md:grid-cols-2 mb-[40px] px-[40px] gap-12'>

            <div className={`flex justify-center items-center bg-[url(${bgLeft})] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] h-[200px] rounded-md  bg-right bg-cover`} >

                <img src={bgLeft} alt="" className='md:block hidden' />
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[20px] font-bold text-white mx-5 w-full'>In-Progress</h1>
                    <p className='text-white text-[40px] mt-3 font-bold'>{inprogressData.length}</p>
                </div>
                <img src={bgRight} alt="" className='md:block hidden'/>
            </div>

            <div className={`flex justify-center items-center bg-[url(${bgLeft})] bg-gradient-to-br from-[#54CF68] to-[#00827A] h-[200px] rounded-md  bg-right bg-cover`} >
                
                <img src={bgLeft} alt="" className='md:block hidden'/>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-[20px] font-bold text-white'>Resolved</h1>
                    <p className='text-white text-[40px] mt-3 font-bold'>{completeTask.length}</p>
                </div>
                <img src={bgRight} alt="" className='md:block hidden'/>
            </div>

        </div>
    );
};

export default Count;