import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import '../../styles/navbar.css'

class Header extends Component {

  state = {
    isOpen : false,
    prevScrollpos : window.pageYOffset
  }

 componentDidMount() {
  window.onscroll = () => this.handleScroll()
}

  handleScroll() {
  var currentScrollPos = window.pageYOffset;
  if(this.state.prevScrollpos < 75){
    document.getElementById("navbar").style.top = "0";
  }
  else if (this.state.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  this.setState({prevScrollpos : currentScrollPos});
}

  toggle = () => {
    this.setState({isOpen : !this.state.isOpen})
}

  render () {
    return (
    <div  id='navbar' className='fixed-top eon-navbar-books'>
      <Navbar className="nav-text-books" expand="md">
        <NavLink href="/">EARTH OASIS NETZWERK</NavLink>
        <NavbarToggler onClick={this.toggle} >
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/clientes/">Das NETZWERK</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                Die Bücher
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/vision-buecher">Die VISION</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/vision-entfaltung">Die Entfaltung</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/vision-essenz">Die Essenz</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#contato">Interviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#time">Über den Autor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#servicos">Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )};
}

export default Header; 