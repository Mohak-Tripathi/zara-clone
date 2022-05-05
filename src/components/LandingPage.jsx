







// import React from 'react'


// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./Landing.css";

// // import required modules
// import { Pagination } from "swiper";








// function LandingPage() {
//   return (
//     <>
//       <Swiper
//         direction={"vertical"}
//         pagination={{
//           clickable: true
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img
//             src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-new/subhome-xmedia-18//w/733/IMAGE-landscape-f5924756-a852-4fe8-aecc-c50fa156d560-default_0.jpg?ts=1651507433802"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://static.zara.net/photos///contents/mkt/spots/ss22-summer-special/subhome-xmedia-man//w/1366/IMAGE-portrait-ipad-fill-nomargins-3d60f595-d04d-4ef2-962c-b73bc1b2c907-default_0.jpg?ts=1651164418830"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-trajes/subhome-xmedia-15//w/733/IMAGE-landscape-d1b88853-cfba-434b-8710-089d9dbb52bc-default_0.jpg?ts=1649863188632"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-joinlife/subhome-xmedia-18//w/733/IMAGE-landscape-8ae6282f-4db4-4259-bdd2-c4530893387f-default_0.jpg?ts=1651506915116"
//             alt=""
//           />
//         </SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
      
//       </Swiper>
//     </>
//   )
// }

// export default LandingPage





import React from 'react';
import { FullPage, Slide } from 'react-full-page';

export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage controls>
        <Slide>
        <img 
            src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-new/subhome-xmedia-18//w/733/IMAGE-landscape-f5924756-a852-4fe8-aecc-c50fa156d560-default_0.jpg?ts=1651507433802"
            alt=""
          />
        </Slide>


        <Slide>
         

        <img
             src="https://static.zara.net/photos///contents/mkt/spots/ss22-summer-special/subhome-xmedia-man//w/1366/IMAGE-portrait-ipad-fill-nomargins-3d60f595-d04d-4ef2-962c-b73bc1b2c907-default_0.jpg?ts=1651164418830"
            alt=""
         />
        </Slide>


        <Slide>
         

        <img
             src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-trajes/subhome-xmedia-15//w/733/IMAGE-landscape-d1b88853-cfba-434b-8710-089d9dbb52bc-default_0.jpg?ts=1649863188632"
            alt=""
         />
        </Slide>



        
        <Slide>
         

        <img
             src="https://static.zara.net/photos///contents/mkt/spots/ss22-north-man-joinlife/subhome-xmedia-18//w/733/IMAGE-landscape-8ae6282f-4db4-4259-bdd2-c4530893387f-default_0.jpg?ts=1651506915116"
            alt=""
         />
        </Slide>


        

      </FullPage>
    );
  }
};


