import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { productsData } from "./productsData";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from "jquery";
import {Link} from "react-router-dom";

const Productslist = ({ img_url, product_name, price }, match) => {
  const [radio,setRadio] = useState({
    selected: false,
    category: ""
  });

  function valueChange (e) {
    console.log(radio)
    setRadio({
      selected: true,
      category: e.currentTarget.value

       
    },
    
    )
   
  }
    const prodData = productsData;
  const displayData = (cat)=>{
      const storing = cat.filter(data => data.category == radio.category)
      if(storing.length == 0)
      return cat
   
      else
      return storing;
  }
  console.log(match);
  
  return (
    
    <div>
      <div style={{ marginTop: "20px", marginBottom: "50px" }}>
        <Card className=" text-black">
          <Card.Img src="/img/bg-beagrumb.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title style={{ position: "absolute", right: "100px" }}>
              HOME
            </Card.Title>
            <Card.Text
              style={{ position: "absolute", right: "100px", top: "70px" }}
            >
              Home
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div style={{display: "flex",height: "auto"}}>
       
     <div style={{width: "20%", height: "auto",paddingLeft: "120px",textAlign: "left", lineHeight: "40px"}}>
       <h4>Category</h4>
        <form>
          <input type="radio" id="rbtn" name="category" value="stool"
          onChange={valueChange}
          
          />

          <lable for="stooll">  Stool</lable><br/>

          <input type="radio" id="rbtn" name="category" value="sofa"
                  onChange={valueChange}
                  
                  />
          <lable for="Sofas">  Sofas</lable><br/>
          <input type="radio" name="category" id="rbtn" value="furniture"
                onChange={valueChange}
                />
          <lable for="furniture">  Furnitures </lable><br/>
          <input type="radio" name="category" id="rbtn" value="chair" 
          onChange={valueChange}
          />
          <lable for="chairs">  Chairs</lable><br/>
          {/* <input type="radio" name="category" value="Lighting" onChange={valueChange}/>
          <lable for="light">  Lighting</lable><br/> */}
          <input type="radio" name="category" id="rbtn" value="decor" onChange={valueChange}
          />
          <lable for="decor">  Decor</lable><br/>
          <input type="radio" name="category" id="rbtn" value="lamp" onChange={valueChange}
          />
          <lable for="lamp">  Lamps</lable><br/>
          <button className="btn btn-primary" onClick={() => setRadio({category: "",selected: false}) }>Clear All</button>
          
        </form>
        {/* <div style={{marginTop: "20px"}}>
        <h4>Filter By</h4>
        <br/>
        <h5> Categories</h5>
        <form>
          <input type="checkbox" name="home"/>
          <lable for="stooll">  Stool</lable><br/>
          <input type="checkbox" name="home"/>
          <lable for="Sofas">  Sofas</lable><br/>
          <input type="checkbox" name="home"/>
          <lable for="furniture">  Furnitures </lable><br/>
          <input type="checkbox" name="home"/>
          <lable for="chairs">  Chairs</lable><br/>
          <input type="checkbox" name="home"/>
          <lable for="light">  Lighting</lable><br/>
          <input type="checkbox" name="home"/>
          <lable for="decor">  Decor</lable><br/>
          <input type="checkbox" name="home"/>
          <lable for="lamp">  Lamps</lable><br/>
          
        </form>
        
        </div> */}
     </div>
     
     
     
      <div style={{display: "flex",width:"80%",height:"auto",flexWrap: "wrap",alignContent: "flex-start"}} >
          
          
          {displayData(productsData).map(item => 
            
            

          <div style={{position: "relative", width: "25%",height: "auto",justifyContent: "space-around"}}>
            <div style={{width: "200px",height: "300px",marginBottom: "20px",marginLeft: "20px"}}>
            <img src={item.img_url} height="auto" width="200px"/>
        
              <Link to={`/products/${item.product_name}`}><h6 style={{textAlign: "center"}}>{item.product_name}</h6></Link>
              <p style={{textAlign: "center"}}>
               $ {item.price}
              </p>
              </div>
          </div>
        
          )}
      </div>
      </div>
     
     
      
    </div>
  );
 
};

export default Productslist;
