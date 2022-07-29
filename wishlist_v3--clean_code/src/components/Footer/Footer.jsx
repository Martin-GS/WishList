// Imports modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import style
import { Container, Navbar } from 'react-bootstrap';
import './footer.scss';

// Component
function Footer() {

  return (

    <div className="footer">

      <Container fluid>

        {/* Footer : displayed in desktop version / hidden in mobile version */}
        <div className="footer container-fluid d-none d-md-block">

          {/* phantom footer */}
          <div className="row py-3">
              &nbsp;
          </div>

          {/* real footer */}
          <div className="fixed-bottom">

            <Navbar className="justify-content-center text-secondary" bg="light" variant="light">

                <div className="px-3 py-2">
                  &copy; {new Date().getFullYear()} WishList
                </div>

                <div className="px-3 py-2">
                  <Link to="/contact" className="text-secondary text-decoration-none">
                    Contact
                  </Link>
                </div>

                <div className="px-3 py-2">
                  <Link to="/about" className="text-secondary text-decoration-none">
                    À propos
                  </Link>
                </div>

                <div className="px-3 py-2">
                  <Link to="/legal" className="text-secondary text-decoration-none">
                    Mentions légales
                  </Link>
                </div>

            </Navbar>

          </div>

        </div>

      </Container>

    </div>

  );

}

// Export
export default Footer;
