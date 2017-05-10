import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem }
from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../public/style.scss';

import user from '../model/user';

/**
 * Class representing a menu
 * @extends Component
 */
export default class Menu extends Component {

  /* class constructor */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* Render the menu deoending on user status */
  render() {
    if (user.isLoggedin) {
      return (
        <div className="newsBar">
          <Navbar toggleable>
            <NavbarToggler right />
            <NavbarBrand className="navBrand" href="/">Home</NavbarBrand>
            <Collapse navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink exact activeClassName="active" to="/logout">Logout</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    return (<div />);
  }
}
