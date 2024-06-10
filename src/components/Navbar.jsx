

import React, { useContext, useState } from 'react';
import { Navbar as BootstrapNavbar, Button } from 'react-bootstrap';
import {
  
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Cerca from './Cerca';
import { ThemeContext } from '../modules/Contexts';

export default function Navbar({handleInputChange, search}) {

  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  let [theme, setTheme] = useContext(ThemeContext); // richiamo la funzione del context senza passare più le props

 
  return (
    <>
    <BootstrapNavbar expand='lg' className='bg-body-tertiary' bg={theme} variant={theme} >

          <MDBContainer fluid className='d-flex justify-content-between align-items-center'>
            <div className='d-flex justify-content-between align-items-center'>
              <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
              <MDBNavbarToggler
                type='button'
                data-target='#navbarColor02'
                aria-controls='navbarColor02'
                aria-expanded='false'
                aria-label='Toggle navigation'
                onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
              >
                <MDBIcon icon='bars' fas />
              </MDBNavbarToggler>
              <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
                <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                  <MDBNavbarItem className='active'>
                    <MDBNavbarLink aria-current='page' href='#'>
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>About</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href='#'>Browse</MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </div>
              {/* inserisco un componente cerca dove all'interno è presente il form*/ }
              <div className='d-flex align-items-baseline justify-content-center'>
              <Cerca handleInputChange={handleInputChange} search={search} />
              <Button variant="primary" className='pb-1 m-1' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Theme</Button>
              </div>
          </MDBContainer>
  </BootstrapNavbar>
</>
);
}
