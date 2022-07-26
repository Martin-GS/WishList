// Import packages/modules
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-feather';
import { InlineShareButtons } from 'sharethis-reactjs';

// Import others
import { getToken } from '../../utils/auth';

// Import components
import DeleteItem from './DeleteItem';
import Loader from '../Loader/loader';

// Import stylesheet
import './list.scss';

// Component
const List = () => {

  const [dataId, setDataId] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [dataComent, setDataComent] = useState([]);
  const [dataItems, setDataItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();
  const history = useHistory();
  const { id } = useParams();

  // Fetch data from API
  const loadLists = () => {
    setLoading(true);
    axios.get(`https://onedream-onewish.herokuapp.com/list/${id}?withItems=true`, {
      headers: {'Authorization': `Bearer ${token}`}
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

      { loading && <Loader /> }

      {/* <ItemsLoop loading={loading} dataId={dataId} dataTitle={dataTitle} dataComent={dataComent} dataItems={dataItems} /> */}

      {/* Title (and add-item button in desktop mode) */}
      <div className="row mb-3">
        <div className="d-flex justify-content-between">
          <div className="list-title">
            <h2>{dataTitle}</h2>
            <p className="text-secondary">{dataComent}</p>
          </div>
          <div className="lists-addlist align-self-center d-none d-md-block">
            <a type="button" className="btn btn-outline-dark shadow" href={`/list/${dataId}/createitem`} role="button">Nouvel article</a>
          </div>
        </div>
      </div>

      {/* Display items : looping data from props (API) */}
      <div className="row">

        { !loading && dataItems
          .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
          .map((item) => (

            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4 mx-auto">

              <div className="card shadow">
                <Link to={{ pathname: item.url }} target="_blank">
                  <img src={item.image_url} alt={item.id} className="item-image-thumbnail" />
                </Link>
                <Link to={{ pathname: item.url }} target="_blank">
                  <div className="list-oneitem-image-div" style={{ 
                    backgroundImage: `url(${item.image_url})`,
                    width:'100%', 
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(1.2px)',
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center', }} >
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

      {/* List-Footer : displayed only in List component */}
      <div className="list-footer">

        {/* phantom list-footer */}
        <div className="row py-3">
          <div className="col">
            &nbsp;
          </div>
        </div>

        {/* real list-footer */}
        <div className="fixed-bottom container-fluid d-flex py-3 bg-light justify-content-around">
          <div>
            <a type="button" className="bg-light border-0 link-dark" href="/lists" role="button">
              <Icon.ChevronLeft className="rounded border border-2 border-dark" size="1.6em" />
            </a>
          </div>
          <div>
            <a type="button" className="bg-light border-0 link-dark" href="/lists" role="button">
              <Icon.Home size="1.6em" />
            </a>
          </div>
          <div>
            <a type="button" className="bg-light border-0 link-dark" href={`/list/${dataId}/createitem`} role="button">
              <Icon.Plus className="rounded border border-2 border-dark" size="1.6em" />
            </a>
          </div>
        </div>

      </div>

    </div>

  );
};

// Export component
export default List;
