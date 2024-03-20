import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
      <nav style={navbarStyles.navbar}>
        <ul style={navbarStyles.navList}>
          
          <li style={navbarStyles.navItem}>
            <NavLink to="/" style={navbarStyles.navLink}>
              Formulario
            </NavLink>
          </li>

          <li style={navbarStyles.navItem}>
            <NavLink to="/registros" style={navbarStyles.navLink}>
              Registros
            </NavLink>
          </li> 
        </ul>
      </nav>
    );
  };

const navbarStyles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0',
  },
  navItem: {
    margin: '0',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default Navbar;