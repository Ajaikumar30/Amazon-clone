import React from 'react';
import amazonimg2 from '../assets/amazonimg2.jpg'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
 
    
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href='http://localhost:5173/'>
        <img className="amazon-logo"
        src={amazonimg2} alt="Amazon Logo" />
        </a>
        <p>Delivering to <br></br>Chennai 600001</p>
      </div>
      <div className="navbar-middle">
        <input type="text" placeholder="Search Amazon..." />
        <button className='src-btn'>🔍</button>
      </div>
      <div className="navbar-right">
      
        <button >Hello,<br/> <AssignmentIndIcon/>Sign in/Sign up</button>
         <br/>
        <button><AssignmentReturnIcon/>Returns &<br/> Orders</button>
        <button><ShoppingCartIcon className='shopping ' /> Cart</button>
      </div>
    </nav>
  );
}

export default Navbar;
