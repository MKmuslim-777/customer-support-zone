import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCircle } from "react-icons/fa";

const Card = ({ data, setInprogress, inprogress }) => {
  const handleCard = () => {
    toast("In Progress");
    data.status = "In Progress";
    // setInprogress([...inprogress, data])
  };

  return (
    <div className="w-full mb-5">
      <div
        className="bg-white p-4 shadow-md rounded-md md:w-full min-w-[320px] cursor-pointer"
        onClick={handleCard}
      >
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-[20px]">{data.title}</h1>
          <p
            className={`${
              data.status == "Open"
                ? "bg-green-200 text-green-800"
                : "bg-yellow-100 text-yellow-600"
            } font-semibold rounded-2xl px-[16px] py-[5px]`}
          ><FaCircle />{data.status}
          </p>
        </div>
        <div>
          <p className="text-gray-500">{data.description}</p>
        </div>

        <div className="flex justify-between items-center mt-5">
          <div className="flex">
            <p className="text-gray-500 mr-5">{data.id}</p>
            <p
              className={`${
                data.priority == "High Priority"
                  ? "text-red-500"
                  : data.priority == "Medium Priority"
                  ? "text-yellow-500"
                  : "text-green-500"
              } font-semibold`}
            >
              {data.priority}
            </p>
          </div>
          <div className="flex">
            <p className="text-gray-500 mr-5">{data.customer}</p>
            <p className="text-gray-500 ">{data.createdAt}</p>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Card;
