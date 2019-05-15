import React from 'react'
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>StarWars</h2>
      <ul className="nav">
        <li>
          <NavLink className="link" activeClassName="active-link" exact to="/">People</NavLink>
        </li>
        <li>
          <NavLink className="link" activeClassName="active-link" to="/planets">Planets</NavLink>
        </li>
        <li>
          <NavLink className="link" activeClassName="active-link" to="/species">Species</NavLink>
        </li>
        {/* <li>
          <NavLink className="link" activeClassName="active-link" to="/starships">Starships</NavLink>
        </li>
        <li>
          <NavLink className="link" activeClassName="active-link" to="/vehicles">Vehicles</NavLink>
        </li> */}
      </ul>
    </nav>
  )
}

export default Nav
