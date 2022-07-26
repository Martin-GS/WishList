// Import modules
import React from 'react';

// Import components

// Miscellaneous
import './header.scss';
import { Navbar, Nav } from 'react-bootstrap';
import * as Icon from 'react-feather';
import logo from '../../assets/images/logo.png';

// Component
function Header() {

  return (

    <div className="container">

      {/* phantom header */}

      <div className="py-4">
        <div className="row">
          <div className="col">
            &nbsp;
          </div>
        </div>
      </div>

      {/* real header */}

      <div className="py-3">

        {/* nav background */}
        <Navbar className="fixed-top shadow" bg="light" expand="md">

          {/* nav content */}
          <div className="container">

            {/* Branding */}
            <Navbar.Brand className="py-1" href="/lists">
              <img src={logo} width="40" height="auto" alt="Wishlist logotype insigne" />
            </Navbar.Brand>

            {/* Navigation */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

              <Nav>

                {/* Profile link : display if connected / hidden if disconnected */}
                {/* {(token === true) ?
                  <Nav.Link href="/profile">
                    <span className="navitem">
                      <span id="navitem-img"><Icon.User size="1.7em" /></span>
                      <span className="d-md-none" id="navitem-txt">Profil</span>
                    </span>
                  </Nav.Link>
                  :
                  <div></div>
                } */}

                {/* Contact link : displayed in mobile version / hidden in desktop version */}
                <Nav.Link href="/contact" className="d-md-none">
                  <span className="navitem">
                    <span id="navitem-img"><Icon.Mail size="1.7em" /></span>
                    <span id="navitem-txt">Contact</span>
                  </span>
                </Nav.Link>

                {/* About link : displayed in mobile version / hidden in desktop version */}
                <Nav.Link href="/about" className="d-md-none">
                  <span className="navitem">
                    <span id="navitem-img"><Icon.Info size="1.7em" /></span>
                    <span id="navitem-txt">À propos</span>
                  </span>
                </Nav.Link>

                {/* Legal link : displayed in mobile version / hidden in desktop version */}
                <Nav.Link href="/legal" className="d-md-none">
                  <span className="navitem">
                    <span id="navitem-img"><Icon.File size="1.7em" /></span>
                    <span id="navitem-txt">Mentions légales</span>
                  </span>
                </Nav.Link>

                {/* LogOut : display if connected / hidden if disconnected */}
                {/* {(token === true) ?
                  <Nav.Link href="/">
                    <span className="navitem">
                      <span id="navitem-img">
                        <Icon.LogOut
                          size="1.7em"
                          onClick={() => {
                            const confirmBox = window.confirm("Voulez-vous vous déconnecter ?")
                            if (confirmBox === true) { logout() }
                          }}
                        />
                      </span>
                      <span
                        className="d-md-none" id="navitem-txt"
                        onClick={() => {
                          const confirmBox = window.confirm("Voulez-vous vous déconnecter ?")
                          if (confirmBox === true) { logout() }
                        }}
                      >
                        Déconnexion
                      </span>
                    </span>
                  </Nav.Link>
                  :
                  <div></div>
                } */}

                {/* LogIn : display if disconnected / hidden if connected */}
                {/* {(token !== true) ?
                  <Nav.Link href="/signin">
                    <span className="navitem">
                      <span id="navitem-img">
                        <Icon.LogIn size="1.7em" />
                      </span>
                      <span className="d-md-none" id="navitem-txt">
                        Se connecter
                      </span>
                    </span>
                  </Nav.Link>
                  :
                  <div></div>
                } */}

                {/* LogOn : display if disconnected / hidden if connected */}
                {/* {(token !== true) ?
                  <Nav.Link href="/signup">
                    <span className="navitem">
                      <span id="navitem-img">
                        <Icon.UserPlus size="1.7em" />
                      </span>
                      <span className="d-md-none" id="navitem-txt">
                        S'enregistrer
                      </span>
                    </span>
                  </Nav.Link>
                  :
                  <div></div>
                } */}

                <hr />

                {/* Copyright : displayed if mobile version / hidden if desktop version */}
                <div className="d-md-none text-center">
                  &copy; {new Date().getFullYear()} WishList. Tous droits réservés
                </div>

              </Nav>

            </Navbar.Collapse>

          </div>

        </Navbar>

      </div>

    </div>

  );
}

// Export
export default Header;
