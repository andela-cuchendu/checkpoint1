import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem }
from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../public/style.scss';

import user from '../model/User';

/**
 * Class creates the menu of the application
 * @extends Component
 */
export default class Header extends Component {

/**
 * First set the component state with empty object.
 * @constructor
 * @return {void}
 */
  constructor(props) {
    super(props);
    this.state = {};
  }


/**
 * Renders the menu component depending on user status
 If user is guest, return null
 * @return {ReactElement||null}
 */
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
