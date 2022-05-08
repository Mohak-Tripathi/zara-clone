import React, { useEffect, useState } from "react";
import "./Kidsproduct.css";

const Kidsproduct = () => {
  const [kidsData, setKidsData] = useState([]);

  useEffect(() => {
    getkidsitem();
  });

  const getkidsitem = async () => {
    const kidsitemdata = await fetch("http://localhost:8080/KidsData");
    const res = await kidsitemdata.json();
    setKidsData(res);
  };

  return (
    <div className="Main_kids_tri">
      <div className="render_data_kids">
        {kidsData.map((elem) => (
          <div>
            <img className="kids_image" src={elem.image} alt="" />

            <div className="span_div">
              <span>{elem.name} </span>
              <br />
              <span>
                <span>₹ </span>
                {elem.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kidsproduct;
