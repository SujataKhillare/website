import React from 'react';
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <div>
        <div className='main-footer'>
           <div className='container'>
            <div className='row'>
           {/* colomn1 */}
           {/* <h1>FOOTER</h1> */}
           <div className='col'>
           <h4>MENU</h4>
           <ul className='list-unstyled'>
            <li>ABC</li>
            <li>XYZ</li>
            <li>PQR</li>
            <li>JKL</li>
           </ul>
           </div>
           {/* colomn2 */}
           <div className='col'>
        <h4>RESERVATION</h4>
        <ul className='list-unstyled'>
          <li>RET</li>
          <li>TUY</li>
          <li>POI</li>
          <li>SED</li>
        </ul>
        
            </div>
            {/* colomn3 */}
            <div className='col'>
        <h4>SHOP</h4>
        <ul className='list-unstyled'>
          <li>RET</li>
          <li>TUY</li>
          <li>POI</li>
          <li>SED</li>
        </ul>
        
            </div>
            <div className='col'>
        <h4>NEWS</h4>
        <ul className='list-unstyled'>
          <li>RET</li>
          <li>TUY</li>
          <li>POI</li>
          <li>SED</li>
        </ul>
        
            </div>
            <div className='col'>
        <h4>CONTACT</h4>
        <ul className='list-unstyled'>
          <li>+4 1800 555 1234</li>
          <li>BOOKABLE@RESTAURANT</li>
          <li>49 Featherstone Street</li>
          <li>London</li>
          <li>ECIY 8SY</li>
          <li>UNITED STATE</li>
        </ul>
        
            </div>
            <button id='btn'>ONLINE RESERVATION</button>
            </div>
            <div className='follow'>
             {/* <p className='col-sm'> */}
             <h2>FOLLOW</h2>
             <h3><TwitterIcon/> twitter</h3>
             <h3><FacebookIcon/> facebook</h3>
             <h3><InstagramIcon/> Instagram</h3>
             {/* </p> */}
            </div>
            </div> 

        </div>
        </div>
    );
};

export default Footer;