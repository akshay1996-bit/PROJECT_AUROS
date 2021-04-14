import React from 'react';

const Footer = () => {
    return ( <div style={{position: "relative",width: "100%", marginTop: "30px",marginLeft: "20px",bottom: 0,backgroundColor: "lightblue"}}>
            <div style={{display: "flex",justifyContent: "space-around"}}>
            <div>
                <img src="/img/at-auros-logo-1557240632.jpg" alt="logo"/>
                <p>2593 Timbercrest Road, Chisana, Alaska Badalas <br/>
                United State
                <br/>
                <br/>
                (+91)7-723-4608<br/>

                Demo@demo.com


                </p>
            </div>
            <div > 
            <h4>Our Products</h4>
            <ul style={{listStyleType :"none"}}>
            <li>BestSellers</li>
            <li>New In</li>
            <li>Chairs</li>
            <li>Sofas</li>


            </ul>

            </div>

            <div > 
            <h4>Useful Links</h4>
            <ul style={{listStyleType :"none"}}>
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact</li>


            </ul>

            </div>
            <div>
            <h4>Newsletter Signup</h4>
            <p>Stay Updated on Email</p>
            <input type="text" placeholder="Your Email.."></input>
            
            <button>Subscribe</button><br/>
            <input type="checkbox"></input> <p>We will send you Emails and you agree. Yes I agree</p>
           

            </div>
            </div>


    </div> );
}
 
export default Footer;