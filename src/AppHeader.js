import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
  <header>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/one">one</NavLink>
        </li>
        <li>
          <NavLink to="/two">two</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
