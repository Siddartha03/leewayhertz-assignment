import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import values from '../Updator';

export default class NavBar extends Component {
  constructor() {
    super();

    values.update = this.forceUpdate.bind(this);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          LeewayHertz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link exact={true} as={NavLink} to="/">
              Dashboard
            </Nav.Link>
            {sessionStorage.getItem('loggedIn') == null ? (
              <>
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              </>
            ) : (
              <>
                {sessionStorage.getItem('isModerator') === 'true' && (
                  <Nav.Link as={NavLink} to="/addModerator">
                    Add Moderator
                  </Nav.Link>
                )}
                <Nav.Link as={NavLink} to="/logout">
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
          {sessionStorage.getItem('loggedIn') != null && (
            <h2 style={{color:"#0056b3"}}
              className={`navbar-text${
                sessionStorage.getItem('isModerator') === 'true' && ' text-info'
              }`}
            >
              {sessionStorage.getItem('uname')}
            </h2>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}