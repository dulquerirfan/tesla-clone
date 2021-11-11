import React,{useState} from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux';
function Header() {
        const [burgerStatus, setburgerStatus] = useState(false);
        const cars=useSelector(selectCars);
        
    return (
        <Wrap>
         <Logo src='/images/logo.svg'/>

         <Menu>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model Y</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Solar Panels</a></p>
            <p><a href="#">Solar Roofs</a></p>
            <p><a href="#">Accessories</a></p>
         </Menu>
         <SecondMenu>
            <p><a href="#">Shop</a></p>
            <p><a href="#">Account</a></p>
         </SecondMenu>
         <ThirdMenu onClick={()=>setburgerStatus(true)}>
         <p><a href="#">Menu</a></p>
         </ThirdMenu>
         <MenuItems show={burgerStatus}>
         <Closediv>
         <CloseButton onClick={()=>setburgerStatus(false)}/>
         </Closediv>
         <li>Model S</li>
         <li>Model 3</li>
         <li>Model X</li>
         <li>Model Y</li>
         <li>Solar Roof</li>
         <li>Solar Panels</li>
         <li>Existing Inventory</li>
         <li>Used Inventory</li>
         <li>Test Drive</li>
         <li>PowerWall</li>
         <li>Commercial Energy</li>
         <li>Utilities</li>
         <li>Charging</li>
         <li>Find Us</li>
         <li>Support</li>
         <li>Investor Relations</li>
         <li>Shop</li>
         <li>Account</li>
         </MenuItems>
         
        </Wrap>
    )
}

export default Header
const Wrap=styled.div`
    height:60px;
    position:fixed;
    display:flex;
    align-items:center;
   
    left:0;
    right:0;
    top:0;
    justify-content:space-between;
    z-index:16;
    
`
const Logo=styled.img`
    padding-left:10px;
`
const Menu=styled.ul`
   display:flex;
   font-weight:600;
   align-items:center;
   a{
       text-transform:uppercase;
       text-decoration:none;
       margin:10px;
   }
   cursor:pointer;
   @media only screen and (max-width: 600px){
    display:none;
   }
`
const SecondMenu=styled.ul`
display:flex;
font-weight:600;
align-items:center;
a{
    text-transform:uppercase;
    text-decoration:none;
    margin:10px;
}
@media only screen and (max-width: 600px){
    display:none;
   }
`
const ThirdMenu=styled.ul`
font-weight:600;
align-items:center;
cursor:pointer;
a{
    text-transform:uppercase;
    text-decoration:none;
    margin:10px;
}
@media only screen and (max-width: 600px){
    background-color:#C2CDDB;
    border-radius:10px;
    opacity:0.85;
    cursor:pointer;
   }

`
const MenuItems=styled.div`
   position:fixed;
   top:0;
   bottom:0;
   right:0;
   background-color:white;
   width:300px;
   z-index:1;
  list-style-type:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  transform:${props=> props.show ? `translateX(0)`:`translateX(100%)`};
  transition:transform 0.3s ease-in;
  li{
      padding:15px 0;
      border-bottom:1px solid rgba(0,0,2);
      font-weight:600;
  }  
  overflow-y: scroll;
`

const CloseButton=styled(FaTimes)`
     height:24px;
     width:24px;
      cursor:pointer;
`
const Closediv=styled.div`
    display:flex;
    justify-content:flex-end;
`