import Footer from "daisyui/components/footer";
import "./App.css";
import Navbar from "./Components/Navbar";
import Finis from "./Components/Finis";
import Count from "./Components/Count";
import { Suspense, use, useState } from "react";
import Cards from "./Components/Cards/Cards";
import Tasks from "./Components/Tasks/Tasks";
import Resolveds from "./Components/Resolved/Resolveds";

const createFetchPromise = async () => {
  const res = await fetch("/Problem.json");
  return res.json();
};

const fetchPromise = createFetchPromise();

function App() {
  const [inprogress, setInprogress] = useState([])
  const [completeTask, setCompleteTask] = useState([])
  const [inProgressCards, setInprogressCards] = useState([])
  // console.log(inprogress);


  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#F5F5F5] pt-[60px] ">

        <div className="container-size">
          <Count inprogress={inprogress} completeTask={completeTask} fetchPromise={fetchPromise}></Count>
        <div className="flex md:flex-row flex-col gap-5">
          <div className="w-8/12 ">
            <h1 className="text-2xl font-bold mb-6 md:px-0 px-5">Customer Tickets</h1>
            <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Cards fetchPromise={fetchPromise} inprogress={inprogress} setInprogress={setInprogress}></Cards>
        </Suspense>
          </div>
          <div className="md:p-0 px-5">
            <h1 className="text-2xl font-bold mb-1">Task Status</h1>
            <Tasks inProgressCards={inProgressCards} setInprogressCards={setInprogressCards} inprogress={inprogress} completeTask={completeTask} setCompleteTask={setCompleteTask}></Tasks>
            <h1 className="text-2xl font-bold mb-1 mt-5">Resolved Task</h1>
            <Resolveds inprogress={inprogress} completeTask={completeTask} setCompleteTask={setCompleteTask}></Resolveds>
          </div>
        </div>
        
        </div>
        <Finis></Finis>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
