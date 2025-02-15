import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className='text-success'><FontAwesomeIcon icon={faVideo} beatFade className='me-3' />Media Player</h1>

          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header