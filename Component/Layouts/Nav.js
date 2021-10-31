import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact'

class NavbarPage extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color='indigo' dark expand='md'>
        <MDBNavbarBrand>
          <Image src='/logo.png' width={90} height={40} />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <Link href='/' ripple='light'>
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href='/About'>About US</Link>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to='#!'>Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='#!'>Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Another Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}

export default NavbarPage
