import React from 'react';
import { Link } from 'react-router-dom';
import '../layouts/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
       <h2>Management for Admin</h2>
      <ul>
        <li>
          <Link to="/users">1. Users</Link>
        </li>
        <li>
          <Link to="/histories">2. Histories</Link> 
        </li>
        <li>
          <Link to="/">Back to Main</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;