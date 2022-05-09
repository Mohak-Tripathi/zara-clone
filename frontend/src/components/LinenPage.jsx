import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LinenPage.css";

function LinenPage() {
  const [Linen, setLinen] = useState([]);

  useEffect(() => {
    LineneProduct();
  }, []);

  const LineneProduct = async () => {
    const data = await fetch("https://zaraclone.herokuapp.com/mens");

    const res = await data.json();

    console.log(res);
    setLinen(res);
  };

  // return (
  //   <div className="Main_linen_tri">
  //     <div className="render_data_Linen">
  //       {Linen.map((elem) => (
  //         <Link to={`/Linen_data/${elem.id}`}>
  //           <div key={elem.id}>
  //             <div>
  //               <img className="Linen_image" src={elem.image} alt="" />

  //               <div className="span_div">
  //                 <span>{elem.name} </span>
  //                 <br />
  //                 <span>
  //                   <span>₹ </span>
  //                   {elem.price}
  //                 </span>
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   </div>
  // );
  
//  }
     return (

        <div className='Main_linen_tri'>  

 <div className='render_data_Linen'>
{Linen.map((elem)=>(
    <Link to={`/Linen_data/${elem.id}`} className='cart-price'>
      <div key={elem.id}> 
     <img className='Product_image_tri'  src={elem.image} alt=""/>
      <div className='subdivproduct'> 
          <div >  {elem.name} </div>
          <div >  {elem.price} </div>
      </div> 
</div>
      </Link>
))}
    </div>
    </div>
    
  )
}

export default LinenPage

