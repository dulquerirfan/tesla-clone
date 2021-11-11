import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title,bgimg,description,leftbutton,rightbutton}) {
 
    return (
        <Wrap bgImage={bgimg}>
            <Fade bottom>
            <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
             </ItemText>
          <Buttons>
              <LeftButton>
                  {leftbutton}
              </LeftButton>
              {(rightbutton)&&
               <RightButton>
                  {rightbutton}
              </RightButton>
              }
             
          </Buttons>
        
         <DownArrow src='images/down-arrow.svg'/>
         </Fade>
        </Wrap>    
    )
}

export default Section

const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;//vertical alignment
align-items:center;//horizontal alignment
background-image:${props => `url('/images/${props.bgImage}')`}


`
const Buttons=styled.div`
 display:flex;
 padding-top:28vh;
 @media only screen and (max-width: 600px){
     display:flex;
     flex-direction:column;
 }
`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
`


const ItemText=styled.div`
    text-align:center;
    padding:15vh;
`
const DownArrow=styled.img`
 margin-top:20px;
 height:40px;
 color:black;
 animation:animateDown infinite 1.5s;
 overflow-x:hidden;

`