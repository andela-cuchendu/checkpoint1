import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem }
from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../../public/style.scss';

import user from '../model/user';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    if(user.isLogin) {
      return (
        <div className="newsBar">
          <Navbar toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand className="navBrand" href="/">Home</NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
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
    return (<div></div>);
  }
}
