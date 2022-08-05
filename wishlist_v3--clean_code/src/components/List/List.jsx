// Import modules
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { InlineShareButtons } from 'sharethis-reactjs';
import { getToken } from '../../utils/auth';
import DeleteItem from './DeleteItem';
import Loader from '../Loader/Loader';
import itemdefaultbackground from '../../assets/images/item-default_background.jpg';
import itemdefaultthumbnail from '../../assets/images/item-default_thumbnail.jpg';
import './list.scss';


function List() {

  const [dataId, setDataId] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [dataComent, setDataComent] = useState([]);
  const [dataItems, setDataItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = getToken();
  const { id } = useParams();

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

  useEffect(() => {
    loadLists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div className="list">

      {loading && <Loader />}

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
        <div className="list-title text-center mx-1">
          <h2>{dataTitle}</h2>
          <p className="text-secondary text-center mx-1">{dataComent}</p>
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
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {(item.image_url === "") ?
                      <img src={itemdefaultthumbnail} alt={item.id} className="item-image-thumbnail" />
                      :
                      <img src={item.image_url} alt={item.id} className="item-image-thumbnail" />
                    }
                  </a>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {(item.image_url === "") ?
                      <div
                        className="item-image-background"
                        style={{
                          backgroundImage: `url(${itemdefaultbackground})`,
                          filter: 'blur(0px)',
                        }} >
                      </div>
                      :
                      <div
                        className="item-image-background"
                        style={{
                          backgroundImage: `url(${item.image_url})`,
                        }} >
                      </div>
                    }
                  </a>
                  <div className="m-2">
                    <h3 className="fs-5">
                      <a className="link-dark text-decoration-none" href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h3>
                    <span className="fs-6">
                      <a className="link-secondary text-decoration-none" href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.coment}
                      </a>
                    </span>
                  </div>
                </div>

                <div className="row d-flex justify-content-around mt-2">
                  <div className="col-3">
                    <DeleteItem itemObj={item} listId={dataId} loadLists={loadLists} />
                  </div>
                  <div className="col-9">
                    <InlineShareButtons
                      config={{
                        alignment: 'right',
                        color: 'white',
                        enabled: true,
                        font_size: 16,
                        labels: 'null',
                        language: 'fr',
                        networks: [
                          'whatsapp',
                          'telegram',
                          'messenger',
                          'sharethis',
                        ],
                        padding: 8,
                        radius: 4,
                        show_total: false,
                        size: 30,
                        url: `${item.url}`,
                        image: `${item.image_url}`,
                        description: `${item.coment}`,
                        title: `${item.title}`,
                        message: `${item.coment}`,
                        subject: 'Bonjour, regarde ce que j\'ai trouvé',
                        username: 'Bonjour, regardez ce que j\'ai trouvé'
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

export default List;