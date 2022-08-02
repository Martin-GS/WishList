// Import modules
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { InlineShareButtons } from 'sharethis-reactjs';

// Import auth
import { getToken } from '../../utils/auth';

// Import components
import DeleteItem from './DeleteItem';
import Loader from '../Loader/loader';

// Import style
import { Button } from 'react-bootstrap';
import './list.scss';

// Import images
import * as Icon from 'react-feather';

// Component
function List() {

  const [dataId, setDataId] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [dataComent, setDataComent] = useState([]);
  const [dataItems, setDataItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();
  const { id } = useParams();

  // Fetch data from API
  const loadLists = () => {
    setLoading(true);
    axios.get(`https://onedream-onewish.herokuapp.com/list/${id}?withItems=true`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then((res) => {
        const { data } = res;
        const { id, title, coment, items } = data;
        setDataId(id);
        setDataTitle(title);
        setDataComent(coment);
        setDataItems(items);
      })
      .catch((err) => {
        window.location.href = '/notFound';
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // "Life-cycles"
  useEffect(() => {
    loadLists();
  }, []);

  return (

    <div className="list">

      {/* Title and navigation buttons */}

      <div className="d-flex justify-content-between mb-5">
        <div>
          {/* Small screen */}
          <Link to="/lists" className="d-sd-block d-md-none">
            <Button className="btn btn-primary text-white py-2 shadow-sm" type="button">
              <Icon.ChevronLeft size="2em" />
            </Button>
          </Link>
          {/* Large screen */}
          <Link to="/lists" className="d-none d-md-block ">
            <Button className="btn btn-primary text-white shadow-sm py-2" type="button">
              Retour
            </Button>
          </Link>
        </div>
        {/* Large AND small screens */}
        <div className="list-title">
          <h2>{dataTitle}</h2>
          <p className="text-secondary">{dataComent}</p>
        </div>
        <div>
          {/* Small screen */}
          <Link to={`/list/${dataId}/createitem`} className="d-sd-block d-md-none">
            <Button className="btn btn-primary text-white py-2 shadow-sm" type="button">
              <Icon.Plus size="2em" />
            </Button>
          </Link>
          {/* Large screen */}
          <Link to={`/list/${dataId}/createitem`} className="d-none d-md-block ">
            <Button className="btn btn-primary text-white shadow-sm py-2" type="button">
              Nouvel article
            </Button>
          </Link>
        </div>
      </div>

      {/* Display items : looping data from props (API) */}

      <div className="row">

        {
          !loading && dataItems
            .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
            .map((item) => (

              <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4 mx-auto">

                <div className="card shadow">
                  <Link to={{ pathname: item.url }} target="_blank">
                    <img src={item.image_url} alt={item.id} className="item-image-thumbnail" />
                  </Link>
                  <Link to={{ pathname: item.url }} target="_blank">
                    <div
                      className="item-image-url"
                      style={{
                        backgroundImage: `url(${item.image_url})`,
                        width: '100%',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(1.2px)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }} >

                    </div>
                  </Link>
                  <div className="m-2">
                    <Link className="text-decoration-none" to={{ pathname: item.url }} target="_blank">
                      <h3><a href={`${item.url}`} className="link-dark fs-5 text-decoration-none">{item.title}</a></h3>
                      <span className="link-secondary fs-6">{item.coment}</span>
                    </Link>
                  </div>
                </div>

                <div className="row d-flex justify-content-around mt-2">
                  <div className="col-3">
                    <DeleteItem itemObj={item} listId={dataId} />
                  </div>
                  <div className="col-9">
                    <InlineShareButtons
                      config={{
                        alignment: 'right', // left, center or right
                        color: 'white', // social or white
                        enabled: true, // true or false
                        font_size: 16,
                        labels: 'null', // cta, counts or null
                        language: 'fr',
                        networks: [
                          'whatsapp',
                          'telegram',
                          'messenger',
                          'sharethis',
                        ],
                        padding: 8,
                        radius: 4, // radius of buttons
                        show_total: false,
                        size: 30, // size of buttons
                        url: `${item.url}`,
                        image: `${item.image_url}`, // defaults to og:image or twitter:image
                        description: `${item.coment}`, // defaults to og:description or twitter:description
                        title: `${item.title}`, // defaults to og:title or twitter:title
                        message: `${item.coment}`, // only for email sharing
                        subject: 'Bonjour, regarde ce que j\'ai trouvé', // only for email sharing
                        username: 'Bonjour, regardez ce que j\'ai trouvé' // only for twitter sharing
                      }}
                    />
                  </div>
                </div>

              </div>

            ))
        }

      </div>

    </div>

  );

}

// Export
export default List;
