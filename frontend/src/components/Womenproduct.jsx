import React from "react";
import { useEffect, useState } from "react";
import "./Womenproduct.css";
import { Link } from "react-router-dom";
const Womenproduct = () => {
  const [womendata, setWomendata] = useState([]);

  useEffect(() => {
    getwomendata();
  },[]);

  const getwomendata = async () => {
    const getdata = await fetch("https://zaraclone.herokuapp.com/womens");
    const res = await getdata.json();
console.log(res,"vikrant")
    setWomendata(res);
    console.log("womendata",res)
  };

  return (
    <div className="Main_women_tri">
      
      <div className="render_data_women">

        {womendata.map((elem) => 
          
          <Link to={`/womens/${elem.id}`}> 
           <div key={elem.id}> 
          <img className='Product_image_tri'  src={elem.image} alt=""/>
           <div className='subdivproduct'> 
               <div >  {elem.name} </div>
               <div >  {elem.price} </div>
           </div> 
     </div>
           </Link>
        )}
      </div>
    </div>
  );
};

export default Womenproduct;
