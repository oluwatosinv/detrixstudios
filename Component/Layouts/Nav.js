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
          <Link href='/' passHref>
            <Image
              src='/logo.png'
              width={80}
              height={60}
              className='logo'
              alt='logo'
            />
          </Link>
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
              <MDBNavLink to='#!'>Pricing</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>Wedding</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='/pre-wedding-photographer-nigeria'>
                    Pre Wedding
                  </MDBDropdownItem>
                  <MDBDropdownItem href='/wedding-photographer-nigeria'>
                    Wedding Photography
                  </MDBDropdownItem>
                  <MDBDropdownItem href='wedding-videographer-nigeria'>
                    Wedding Videography
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className='mr-2'>Non Wedding</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='#'>PreWedding</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Wedding Photography
                  </MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Wedding Photography
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Link href='https://www.detrixstudios.com/Client'>
                <a target='_blank'>Client Gallery</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href='/Contact-Us'>Contact US</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    )
  }
}

export default NavbarPage
