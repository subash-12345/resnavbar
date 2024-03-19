import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navstik'>
      <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
  <div class="nav-title" >
  <Link to='/'><img
            src="https://www.vdart.com/wp-content/uploads/2020/02/vdart.svg"
            className="img"
            alt="VDart"
          /></Link>
  </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <Link to="/service" href="" className="a"  style={{color:"black"}}>Services</Link>
    <Link to="/Talent management" className="a"  style={{color:"black"}} >Talent Management</Link>
    <Link to="/product"className="a"  style={{color:"black"}} >product</Link>
    <Link to="/industry" className="a"  style={{color:"black"}}>industries</Link>
    <Link to="/insights" className="a"  style={{color:"black"}}>Insights</Link>
   <Link to="/contact" className="a" style={{color:"black"}}>Contact</Link>
  </div>
</div>

    </div>
  )
}
