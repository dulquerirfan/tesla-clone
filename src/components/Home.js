import React from 'react'
import Section from './Section';

import styled from 'styled-components';
import Header from './Header';
//passes props need to pass those props and style the each sections 
function Home() {
    return (
            <Container>
            <Header/>
            <Section bgimg="/model-s.jpg" title="Model S" description="order Online for Touchless Delivery" leftbutton="custom Order"rightbutton="Existing Inventory"/>
            <Section bgimg="/model-y.jpg" title="Model Y" description="order Online for Touchless Delivery" leftbutton="Custom Order"rightbutton="Existing Inventory"/>
            <Section bgimg="/model-3.jpg" title="Model 3" description="order Online for Touchless Delivery" leftbutton="Custom Order"rightbutton="Existing Inventory"/>
            <Section bgimg="/solar-panel.jpg" title="Solar Panels" description="Lowest Cost Solar Panels in America" leftbutton="Order Now"rightbutton="Learn More"/>
            <Section bgimg="/solar-roof.jpg" title="Solar Roof" description="Produce Clean Energy From Your Roof" leftbutton="Order Now "rightbutton="Learn More"/>
            <Section bgimg="/accessories.jpg" title="Accessories"  leftbutton="Shop Now"/>
            
            
            
            </Container>
    )
}
export default Home

const Container=styled.div`
height:100vh;
`
