import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from './assets/op15.jpg';
import logo2 from './assets/sam6.jpg';
import logo3 from './assets/p4.jpg';
import logo4 from './assets/hu15.jpg';
import Animation from './Animation';

function Home() {
    
    return(
        <>
        <br/>
        <div className="carousel"style={{width:'60%',marginLeft:'20%'}}>
<Carousel fade >
  <Carousel.Item>
     <img
      className="d-block w-100 "
       src={logo1}
      alt="First slide"
      
    /> 
    <Carousel.Caption>
      <h3>Most Reviewed Items</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={logo2}
      alt="Second slide"
     
    />

    <Carousel.Caption>
    <h3>Most Reviewed Items</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Third slide"
      
    />

    <Carousel.Caption>
    <h3>Most Reviewed Items</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo4}
      alt="fourth slide"
      
    />

    <Carousel.Caption>
    <h3>Most Reviewed Items</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div><br/>
<h2>Before Buying Check..</h2> <br/><br/><br/>
 <Animation/>

</>
    )
}

export default Home;
