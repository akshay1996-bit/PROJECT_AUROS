import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


const Couresal = () => {
    return ( <div >  
    <div style={{margin: "20px"}} >
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/h1-slide1.jpg"
      alt="First slide"
    />
    <div style={{position: "absolute",left: "200px", top: "500px",width: "300px"}}><Carousel.Caption style={{color: "black"}}>
      <h1>ETNA</h1>
      <h4 >Lighting 2021 </h4>
      <p>From $650.00</p>
      <Link to="/products"><Button variant="outline-danger">Shop Now</Button></Link>{' '}
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/h1-slide2.jpg"
      alt="Second slide"
    />

<div style={{position: "absolute",left: "200px", top: "500px",width: "300px"}}><Carousel.Caption style={{color: "black"}}>
      <h1>ETNA</h1>
      <h4 >Lighting 2021 </h4>
      <p>From $650.00</p>
      <Button variant="outline-danger">Shop Now</Button>{' '}
    </Carousel.Caption>
    </div>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/h1-slide3.jpg"
      alt="Third slide"
    />

<div style={{position: "absolute",left: "200px", top: "500px",width: "300px"}}><Carousel.Caption style={{color: "black"}}>
      <h1>ETNA</h1>
      <h4 >Lighting 2021 </h4>
      <p>From $650.00</p>
      <Button variant="outline-danger">Shop Now</Button>{' '}
    </Carousel.Caption>
    </div>
  </Carousel.Item>
</Carousel>
</div>
     </div>    );
}
 
export default Couresal;






