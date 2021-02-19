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
  if(this.state.prevScrollpos < 200){
    document.getElementById("navbar").style.background = "transparent";
  }
  else if (this.state.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "#48D1CC";
  } else {
    document.getElementById("navbar").style.top = "-75px";
    document.getElementById("navbar").style.background = "#48D1CC";
  }
  this.setState({prevScrollpos : currentScrollPos});
}

  toggle = () => {
    this.setState({isOpen : !this.state.isOpen})
    document.getElementById("navbar").style.background = "#48D1CC";
}
  render () {
    return (
    <div  id='navbar' className='fixed-top eon-navbar'>
      <Navbar className="nav-text" expand="md">
        <NavLink href="/">EARTH OASIS NETZWERK</NavLink>
        <NavbarToggler onClick={this.toggle} >
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Das NETZWERK</NavLink>
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
                  <NavLink href="/entfaltung-buecher">Die Entfaltung</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/essenz-buecher">Die Essenz</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>Interviews</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#autor">Über den Autor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )};
}

export default Header; 