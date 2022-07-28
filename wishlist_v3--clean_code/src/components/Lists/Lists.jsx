// Import modules
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

// Import components
import DeleteList from './DeleteList'

// Import style
import './lists.scss';

// Component
function Lists() {

  const getLists = [
    {
      id: 1,
      title: 'Première liste',
      coment: 'Cette première liste'
    },
    {
      id: 2,
      title: 'Deuxième liste',
      coment: 'Cette autre liste'
    },
    {
      id: 3,
      title: 'Troisième liste',
      coment: 'Encore une autre liste'
    },
    {
      id: 4,
      title: 'Quatrième liste',
      coment: 'Encore une autre liste'
    },
    {
      id: 5,
      title: 'Cinquième liste',
      coment: 'Encore une autre liste'
    }
  ]

  return (

    <div className="lists">

      {/* Title and add-list button */}
      <div className="row mb-5">
        <div className="d-flex justify-content-between">
          <div className="lists-title">
            <h2>Mes listes</h2>
          </div>
          <div>
            <Link to="../lists/createList">
              <Button className="btn btn-primary text-white shadow-sm" type="button">
                Nouvelle liste
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Display lists : looping data from API */}
      <div className="row">
        { getLists.map((list) => (
            <div key={list.id} className="col-12 col-md-6 col-lg-4 mb-3 mx-auto">
              <div className="card shadow">
                <div className="d-flex justify-content-between">
                  <div className="mt-2 mb-1 mx-2">
                    <h3>
                      <Link to={`/list/${list.id}`} className="fs-5 text-dark text-decoration-none">
                        {list.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="my-1">
                    <DeleteList />
                  </div>
                </div>
                <div className="mb-1 mx-2">
                  <Link to={`/list/${list.id}`} className="link-secondary text-decoration-none">
                    {list.coment}
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

    </div>

  );

}

// Export
export default Lists;
