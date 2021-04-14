import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Item.module.css';
import {Link} from 'react-router-dom';



const Item = () => {

    return ( <div style={{display: "flex",justifyContent: "space-around",marginTop: "20px"}}>
           
           <div className={styles.stool} style={{width: "700px"}}>
            <Link to="/products" style={{color: "black"}}><Card >
  <Card.Img src="/img/stools.jpg" alt="Card image" className={styles.stoolimg}/>
  <Card.ImgOverlay>
    <Card.Title><h1  >Stools</h1></Card.Title>
    <Card.Text>
   4 Items
    </Card.Text>
    
  </Card.ImgOverlay>
</Card></Link>
</div>

<div className={styles.stool} style={{width: "700px"}} >
<Link to="/products" style={{color: "black"}}><Card >
  <Card.Img src="/img/sofas.jpg" alt="Card image" className={styles.stoolimg}/>
  <Card.ImgOverlay>
    <Card.Title><h1 >Sofas</h1></Card.Title>
    <Card.Text>
      4 Items
    </Card.Text>
   
  </Card.ImgOverlay>
</Card></Link>
</div>






    </div> );
}
 
export default Item;
