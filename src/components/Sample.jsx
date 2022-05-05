import React from 'react'
import { FullPage, Slide } from 'react-full-page';

export const Sample = () => {
  return (
    <>
<FullPage duration={1000}>
        <Slide >
         
        
         <img styles={{width:"100vw",height:"100vh"}} src="https://images.edexlive.com/uploads/user/imagelibrary/2020/2/27/original/nature_and_child.jpg?w=400&dpr=2.6" alt="" />  
          <h1>Second slide content</h1>
        
        
        </Slide>

        <Slide>
          <h1>Another slide content</h1>
          <img src="" alt="" />
        </Slide>

        
      </FullPage>
    </>
  )
}




