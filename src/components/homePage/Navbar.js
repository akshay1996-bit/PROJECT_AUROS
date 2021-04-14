import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = ({cart}) => {

const [cartCount,setCartCount] = useState(0);
useEffect(() => {
    let count=0;
    cart.forEach(item => {
      count += item.qty;

      
    });

    setCartCount(count);
},[cart,cartCount])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <img src="/img/at-auros-logo-1557240632.jpg" alt="logo" />

          <div
            className="collapse navbar-collapse px-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
              <li className="nav-item px-4">
                <Link to="/"><a className="nav-link active d-flex align-middle " href="#">
                  Home{" "}
                  
                </a></Link>
              </li>

              {/*----------------------------------------- Shop Section -------------------------------------------------*/}
              <div className="shop">
                <li className="nav-item px-4">
                 <a className="nav-link active d-flex align-middle">
                    <span className="shoptxt">Shop</span>
                    <span>
                      <img src="/img/caret-down-fill.svg" />
                    </span>
                  </a>
                </li>
                <div id="shopdropdown">
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <ul style={{ listStyle: "none" }}>
                      <h4 style={{ paddingTop: "10px" }}>Kitchen</h4>
                      <Link to="/products"><li>Dinner Table</li></Link>
                      <Link to="/products"><li>Dinner Chairs</li></Link>
                      <Link to="/products"><li>Seat Cushions</li></Link>
                      <Link to="/products"><li>Sideboards</li></Link>
                    </ul>
                    <div>
                      <ul style={{ listStyle: "none" }}>
                        <h4 style={{ paddingTop: "10px" }}>Living Room</h4>
                        <Link to="/products"><li>Dinner Table</li></Link>
                        <Link to="/products"> <li>Dinner Chairs</li></Link>
                        <Link to="/products"> <li>Seat Cushions</li></Link>
                        <Link to="/products"><li>Sideboards</li></Link>
                      </ul>
                    </div>

                    <div>
                      <ul style={{ listStyle: "none" }}>
                        <h4 style={{ paddingTop: "10px",paddingRight:"20px" }}>Decoration</h4>
                        <Link to="/products"><li>Lamps</li></Link>
                        <Link to="/products"><li>Lighting</li></Link>
                        <Link to="/products"><li>Furniture</li></Link>
                        <Link to="/products"><li>Speakers</li></Link>
                      </ul>
                    </div>
                    <div className="shopimg">
                      <img src="/img/banner-menu.jpg" alt="banner" />
                    </div>
                  </div>
                </div>
              </div>

              {/* -------------------------------------------Product Section---------------------------------------------- */}
              <div className="product">
                <li className="nav-item px-4">
                  <a className="nav-link active d-flex align-middle">
                    <span className="producttxt">Product</span>
                    <span>
                      <img src="/img/caret-down-fill.svg" alt="..."/>
                    </span>
                  </a>
                </li>

                <div id="productdropdown">
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <ul style={{ listStyle: "none" }}>
                      <h4 style={{ paddingTop: "10px" }}>Product New</h4>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/24-small_default/hummingbird-printed-t-shirt.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Teapot</h6>
                           <p style={{paddingLeft:"10px"}}>$ 21.51</p>
                         </div>
                      </li>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/29-small_default/brown-bear-printed-sweater.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Miro Dining Table</h6>
                           <p style={{paddingLeft:"10px"}}>$ 29.51</p>
                         </div>
                      </li>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/35-small_default/the-best-is-yet-to-come-framed-poster.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Janus Table Lamp</h6>
                           <p style={{paddingLeft:"10px"}}>$ 25.51</p>
                         </div>
                      </li>
                      
                    </ul>
                    <div>
                      <ul style={{ listStyle: "none" }}>
                        <h4 style={{ paddingTop: "10px" }}>Product Feature</h4>
                        <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/24-small_default/hummingbird-printed-t-shirt.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Teapot</h6>
                           <p style={{paddingLeft:"10px"}}>$ 21.51</p>
                         </div>
                      </li>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/29-small_default/brown-bear-printed-sweater.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Miro Dining Table</h6>
                           <p style={{paddingLeft:"10px"}}>$ 29.51</p>
                         </div>
                      </li>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/35-small_default/the-best-is-yet-to-come-framed-poster.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Janus Table Lamp</h6>
                           <p style={{paddingLeft:"10px"}}>$ 25.51</p>
                         </div>
                      </li>
                      </ul>
                    </div>

                    <div>
                      <ul style={{ listStyle: "none" }}>
                        <h4 style={{ paddingTop: "10px" }}>Product Special</h4>
                        <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/24-small_default/hummingbird-printed-t-shirt.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Teapot</h6>
                           <p style={{paddingLeft:"10px"}}>$ 21.51</p>
                         </div>
                      </li>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/29-small_default/brown-bear-printed-sweater.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Miro Dining Table</h6>
                           <p style={{paddingLeft:"10px"}}>$ 29.51</p>
                         </div>
                      </li>
                      <li style={{display: "flex",padding: 0}}>
                         <div  style={{height: "80px", width: "100px"}}>
                         <img src="https://apollotran.com/demo/at_auros/35-small_default/the-best-is-yet-to-come-framed-poster.jpg" 
                           alt="..." height="80px" width="100px" style={{objectFit: "cover"}}
                           
                            />
                         </div>
                         <div>
                           <h6 style={{paddingTop:"20px",paddingLeft: "10px"}}>Janus Table Lamp</h6>
                           <p style={{paddingLeft:"10px"}}>$ 25.51</p>
                         </div>
                      </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <li className="nav-item px-4">
                <a className="nav-link active" href="#">
                  Blog
                </a>
              </li>

              <li className="nav-item px-4">
                <Link to="/contact"><a className="nav-link active" href="#">
                  Contact
                </a></Link>
              </li>

              <li style={{ paddingLeft: "20px", paddingTop: "5px" }}>
                <div style={{display: "flex",marginTop: "5px"}}>
                  <Link to="/cart">
                <img src="/img/cart.svg" height="20px" width="30px" /> <p style={{position: "absolute",top: "20px",left: "875px"}}>{cartCount}</p>
                </Link>
                </div>
              </li>
            </ul>
            <div style={{ marginLeft: "300px" }}>
              <form className="d-flex ">
                <input
                  className="form-control ps-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success " type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = state => {
  return{
    cart: state.shop.cart
  }
}
export default connect(mapStateToProps)(Navbar);
