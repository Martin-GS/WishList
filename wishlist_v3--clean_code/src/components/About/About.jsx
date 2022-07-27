// Import modules
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

// Import components

// Miscellaneous
import './about.scss';
import martin from '../../assets/images/about-martin.png';
import coni from '../../assets/images/about-coni.png';
import nico from '../../assets/images/about-nico.png';
import tommy from '../../assets/images/about-tommy.png';

// Component
function About() {

  const goback = useNavigate();

  return (

    <div className="about">

      <div className="about">

        <div className="row">
          <div className="col text-center">
            <h2>À propos</h2>
          </div>
        </div>

        <div className="row my-4">

          <div className="col-12 col-md-6 col-lg-4 my-2 mx-auto">
            <Card>
              <Card.Header as="h5" className="text-center">Pourquoi WishList ?</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>De nos jours une grande partie de nos achats se fait sur internet. Le choix est vaste, et il est parfois difficile de s'y retrouver. WishList a été développé suite à ce constat.</p>
                  <p>Notre premier objectif étant de vous proposer une application intuitive et simple d'utilisation. Elle a pour but d'enregistrer vos trouvailles, de les classer, de créer des listes d'achat/cadeaux personnalisées, et de les retrouver en seulement quelques clics.</p>
                  <p>Mais cela ne s'arrête pas là ! Et si l'on pouvait aussi partager nos "trouvailles" et faire participer nos proches à l'élaboration de ces listes ? Cette dimension sociale vient compléter l'application et vous permet de partager vos listes avec vos proches.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4 my-2 mx-auto">
            <Card>
              <Card.Header as="h5" className="text-center">Accessible au plus grand nombre</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>WishList a été pensée pour vous accompagner partout où vous allez, toujours à portée de main. C'est pour cela qu'elle a été pensée en "mobile-first" (même si vous pouvez y accéder avec n'importe quel dispositif).</p>
                  <p>En outre, on a pensé aussi (et surtout!) à vous en adaptant son ergonomie afin de rendre l'interface facile à comprendre, épurée, ne disposant que des éléments indispensables à son utilisation.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-4 my-2 mx-auto">
            <Card>
              <Card.Header as="h5" className="text-center">Inscription et utilisation en quelques clics</Card.Header>
              <Card.Body>
                <Card.Text>
                  <p>Pour ce faire, vous n'avez qu'à créer un compte en renseignant un identifiant et un mot de passe (pas besoin de vos données personnelles, on respecte votre vie privée !), vous connecter et.... commencer tout de suite à créer vos listes !</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

        <div className="row my-4">
          <div className="col text-center">
            <h2>La Team WishList</h2>
          </div>
        </div>

        <div className="row">

          <div className="col-12 col-md-6 col-lg-3 my-2 mx-auto">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={martin} />
                <Card.Title className="text-center mt-4">Martin GS</Card.Title>
                <Card.Text className="text-center mt-4">
                  <p>Product owner</p>
                  <p>Développeur Front-End</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-3 my-2 mx-auto">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={coni} />
                <Card.Title className="text-center mt-4">Nicolas Bzn</Card.Title>
                <Card.Text className="text-center mt-4">
                  <p>Scrum master</p>
                  <p>Développeur Front-End</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-3 my-2 mx-auto">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={nico} />
                <Card.Title className="text-center mt-4">Nicolas Brd</Card.Title>
                <Card.Text className="text-center mt-4">
                  <p>Git master</p>
                  <p>Développeur Back-End</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-md-6 col-lg-3 my-2 mx-auto">
            <Card>
              <Card.Body>
                <Card.Img variant="top" src={tommy} />
                <Card.Title className="text-center mt-4">Thomas P.</Card.Title>
                <Card.Text className="text-center mt-4">
                  <p>Lead Back-End</p>
                  <p>Développeur Back-End</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>

      <div className="row">
        <div className="col text-center">
          <Button className="btn btn-primary text-white shadow-sm my-4" type="button" onClick={() => goback(-1)}>
            Retour en arrière
          </Button>
        </div>
      </div>

    </div>

  );
}

// Export
export default About;
