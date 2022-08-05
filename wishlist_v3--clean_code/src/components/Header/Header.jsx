import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';
import * as Icon from 'react-feather';
import LogoutConfirmation from './LogoutConfirmation';
import { isUserAuthenticated, deAuthenticateUser } from '../../utils/auth';
import logo from '../../assets/images/logo.png';
import './header.scss';

const Header = () => {

  const [isAuth, setIsAuth] = useState(isUserAuthenticated);
  const [logoutConfirmationModal, setLogoutConfirmationModal] = useState(false);
  const [expanded, setExpanded] = useState(false);

  let location = useLocation();

  React.useEffect(() => {
    setIsAuth(isUserAuthenticated);
  }, [location]);

  const showConfirmationModal = () => {
    setLogoutConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setLogoutConfirmationModal(false);
  };

  const submitLogout = () => {
    logout();
    setLogoutConfirmationModal(false);
  };

  const logout = () => {
    deAuthenticateUser();
    window.location.href = '/'
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
              {(isAuth !== true) ?
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
              {(isAuth !== true) ?
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
              {(isAuth === true) ?
                <span className="text-secondary text-decoration-none py-2">
                  <span className="navitem" onClick={() => showConfirmationModal()}>
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

              <LogoutConfirmation
                showModal={logoutConfirmationModal}
                confirmModal={submitLogout}
                hideModal={hideConfirmationModal}
              />

              <hr />

              {/* Contact link : displayed in mobile version / hidden in desktop version */}
              <Link to="/contact" className="d-md-none text-secondary text-decoration-none py-2" onClick={() => setExpanded(false)}>
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
              <Link to="/about" className="d-md-none text-secondary text-decoration-none py-2" onClick={() => setExpanded(false)}>
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
              <Link to="/legal" className="d-md-none text-secondary text-decoration-none py-2" onClick={() => setExpanded(false)}>
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
