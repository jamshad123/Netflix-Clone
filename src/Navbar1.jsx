import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar1() {
  return (
    <div className='test'>

       <Navbar bg="dark" expand="lg"></Navbar>
      <Navbar bg="dark" variant="light">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link className='text-light'><Link style={{textDecoration:"none"}} to="/PopularMovies">Popular Movies</Link></Nav.Link>
            <Nav.Link className='text-light'><Link style={{textDecoration:"none"}} to="/LatestMovies">Latest Movies</Link></Nav.Link>
            <Nav.Link className='text-light'><Link style={{textDecoration:"none"}} to="/ComedyMovies">Comedy Movies</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='home'>
      <img src="https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=684&h=456" alt='img' />
      </div>

    </div>
  )
}

export default Navbar1

// https://dummy.restapiexample.com/api/v1/employees