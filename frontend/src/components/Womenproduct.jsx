import React from "react";
import { useEffect, useState } from "react";
import "./Womenproduct.css";

const Womenproduct = () => {
  const [womendata, setWomendata] = useState([]);

  useEffect(() => {
    getwomendata();
  });

  const getwomendata = async () => {
    const getdata = await fetch("http://localhost:8080/WomenData");
    const res = await getdata.json();

    setWomendata(res);
  };

  return (
    <div className="Main_women_tri">
      <div className="render_data_women">
        {womendata.map((elem) => (
          <div>
            <img className="women_image" src={elem.image} alt="" />

            <div className="span_div">
              <span>{elem.name} </span>
              <br />
              <span>
                <span>₹  </span>
                {elem.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Womenproduct;
