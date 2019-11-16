import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../index.css'
import {GiMushroomHouse} from 'react-icons/gi';

import Users from './Users'
import Managers from './Managers'
import Buildings from './Buildings'
import Places from './Places'
import Home from './Home'


export default class NavbarModule extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <Router>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand to="/" href="javascript:void(0)"><GiMushroomHouse className="mushRoomIco"/>MushRoom!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="linkstyle" to="/"><NavLink>Home</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link className="linkstyle" to="/users"><NavLink>Users</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link className="linkstyle" to="/managers"><NavLink>Managers</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link className="linkstyle" to="/buildings"><NavLink>Buildings</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link className="linkstyle" to="/places"><NavLink>Places</NavLink></Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/javilaotz/mushroom">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/managers" component={Managers} />
        <Route exact path="/buildings" component={Buildings} />
        <Route exact path="/places" component={Places} />
      </Router>
    );
  }
}