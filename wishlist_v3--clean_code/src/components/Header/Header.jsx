// Import modules
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// Import auth
import { isUserAuthenticated } from '../../utils/auth';

// Import style
import { Container, Navbar, Nav } from 'react-bootstrap';
import './header.scss';

// Import images
import * as Icon from 'react-feather';
import logo from '../../assets/images/logo.png';

// Component
const Header = () => {

  // state of navbar : toggled/expanded on click
  const [expanded, setExpanded] = useState(false);
  const [isAuth, setIsAuth] = useState(isUserAuthenticated());

  const token = isUserAuthenticated();

  function updateState() {
    return setIsAuth(!isAuth);
  }

  useEffect(() => {
    updateState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (

    <div className="header">

      {/* phantom header */}
      <div className="py-5">
        &nbsp;
      </div>

      {/* real header = Navbar */}
      <Navbar
        className="fixed-top shadow"
        bg="light"
        expand="md"
        expanded={expanded}
      >

        {/* nav content */}
        <Container fluid>

          {/* Branding */}
          <Navbar.Brand className="py-1">
            <Link to="/" onClick={() => setExpanded(false)}>
              <img src={logo} alt="Logo WishList" />
            </Link>
          </Navbar.Brand>

          {/* Navigation */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

            {/* Nav menu */}
            <Nav>

              {/* LogOn : display if disconnected / hidden if connected */}
              {(token !== true) ?
                <Link to="/signup" className="text-secondary text-decoration-none py-2" onClick={() => setExpanded(false)}>
                  <span className="navitem">
                    <span className="navitem-img">
                      <Icon.UserPlus size="1.7em" />
                    </span>
                    <span className="navitem-txt d-md-none">
                      S'enregistrer
                    </span>
                  </span>
                </Link>
                :
                <div></div>
              }

              {/* LogIn : display if disconnected / hidden if connected */}
              {(token !== true) ?
                <Link to="/signin" className="text-secondary text-decoration-none py-2" onClick={() => setExpanded(false)}>
                  <span className="navitem">
                    <span className="navitem-img">
                      <Icon.LogIn size="1.7em" />
                    </span>
                    <span className="navitem-txt d-md-none">
                      Se connecter
                    </span>
                  </span>
                </Link>
                :
                <div></div>
              }

              {/* LogOut : display if connected / hidden if disconnected */}
              {(token === true) ?
                <span className="text-secondary text-decoration-none py-2">
                  <span
                    className="navitem"
                    onClick={() => {
                      const confirmBox = window.confirm("Voulez-vous vous déconnecter ?")
                      if (confirmBox === true) { logout() }
                    }}
                  >
                    <span className="navitem-img">
                      <Icon.LogOut size="1.7em" />
                    </span>
                    <span className="navitem-txt d-md-none">
                      Déconnexion
                    </span>
                  </span>
                </span>
                :
                <div></div>
              }

              <hr />

              {/* Contact link : displayed in mobile version / hidden in desktop version */}
              <Link to="/contact"
                className="d-md-none text-secondary text-decoration-none py-2"
                onClick={() => setExpanded(false)}
              >
                <span className="navitem">
                  <span className="navitem-img">
                    <Icon.Mail size="1.7em" />
                  </span>
                  <span className="navitem-txt">
                    Contact
                  </span>
                </span>
              </Link>

              {/* About link : displayed in mobile version / hidden in desktop version */}
              <Link to="/about"
                className="d-md-none text-secondary text-decoration-none py-2"
                onClick={() => setExpanded(false)}
              >
                <span className="navitem">
                  <span className="navitem-img">
                    <Icon.Shield size="1.7em" />
                  </span>
                  <span className="navitem-txt">
                    À propos
                  </span>
                </span>
              </Link>

              {/* Legal link : displayed in mobile version / hidden in desktop version */}
              <Link to="/legal"
                className="d-md-none text-secondary text-decoration-none py-2"
                onClick={() => setExpanded(false)}
              >
                <span className="navitem">
                  <span className="navitem-img">
                    <Icon.Square size="1.7em" />
                  </span>
                  <span className="navitem-txt">
                    Mentions légales
                  </span>
                </span>
              </Link>

              <hr />

              {/* Copyright : displayed if mobile version / hidden if desktop version */}
              <div className="d-md-none text-center py-2">
                &copy; {new Date().getFullYear()} WishList
              </div>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

    </div>

  );

};

// Export component
export default Header;
