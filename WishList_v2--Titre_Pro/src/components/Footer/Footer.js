// Import packages/modules
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Import stylesheet
import './footer.scss';

// Component
const Footer = () => (

  // Footer : displayed in desktop version / hidden in mobile version
  <div className="footer container-fluid d-none d-md-block">

    {/* phantom footer */}
    <div className="row py-3">
      <div className="col">
        &nbsp;
      </div>
    </div>

    {/* real footer */}
    <div className="fixed-bottom">
      <Navbar className="justify-content-center text-secondary" bg="light" variant="light">
        <Nav>
          {/* Copyright */}
          <div>
            <Nav.Item>
              <Nav.Link>
                &copy; {new Date().getFullYear()} WISHLIST. Tous droits réservés.
              </Nav.Link>
            </Nav.Item>
          </div>
          {/* Contact link */}
          <div>
            <Nav.Item>
              <Nav.Link href="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </div>
          {/* About link */}
          <div>
            <Nav.Item>
              <Nav.Link href="/about">
                À propos
              </Nav.Link>
            </Nav.Item>
          </div>
          {/* Legal link */}
          <div>
            <Nav.Item>
              <Nav.Link href="/legal">
                Mentions légales
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </Navbar>
    </div>
  </div>

);

// Export component
export default Footer;
