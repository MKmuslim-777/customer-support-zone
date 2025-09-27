import React, { use } from "react";
import Card from "./Card";

const Cards = ({ fetchPromise, setInprogress, inprogress }) => {

    const fetchData = use(fetchPromise)
    // const openData = fetchData.filter((element) => element.status == "Open")
    // console.log(inprogress);
    // const {id, }
  return (
    <div className="grid md:grid-cols-2 gap-5 md:px-0 px-5">

        {
            fetchData.map( data => <Card 
              key={data.id} 
              inprogress={inprogress} 
              setInprogress={setInprogress} 
              data={data}></Card>)
        }
      
    </div>
  );
};

export default Cards;
