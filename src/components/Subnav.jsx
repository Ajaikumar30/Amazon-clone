import React from 'react';
import './Subnav.css'; 
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const Subnav = () => {
  return (
    <div className="navbar1">
      <ul className="navbar-list">
        <li><a href="#all" className='all'><WorkspacesIcon/>All</a></li>
        <li><a href="#fresh">Fresh</a></li>
        <li><a href="#mxplayer">MX Player</a></li>
        <li><a href="#sell">Sell</a></li>
        <li><a href="#best-sellers">Best Sellers</a></li>
        <li><a href="#todays-deals">Today's Deals</a></li>
        <li><a href="#mobiles">Mobiles</a></li>
        <li><a href="#prime">Prime</a></li>
        <li><a href="#customer-service">Customer Service</a></li>
        <li><a href="#electronics">Electronics</a></li>
        <li><a href="#home-kitchen">Home & Kitchen</a></li>
        <li><a href="#fashion">Fashion</a></li>
        <li><a href="#new-releases">New Releases</a></li>
      </ul>
    </div>
  );
};

export default Subnav;
