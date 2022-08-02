// Import modules
import React, { useState } from 'react';
import axios from 'axios';

// Import auth
import { getToken } from '../../utils/auth';

// Import style
import { Button } from 'react-bootstrap';
import './list.scss';

// Import images
import * as Icon from 'react-feather';

// Component
const DeleteItem = ({ itemObj, listId }) => {

  // States
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const itemid = itemObj.id;
  const idlist = listId;

  const token = getToken();

  const handleDelete = (evt) => {
    setLoading(true);
    setIsError(false);

    axios.get(`https://onedream-onewish.herokuapp.com/list/${idlist}/item/${itemid}/delete`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        setData(res.data);
      }).catch(err => {
        setIsError(true);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (data) {
    window.location.reload(false);
  }

  return (
    <Button
      className="delete-item bg-light border-0"
      onClick={() => {
        const confirmBox = window.confirm(
          "Voulez vous supprimer cet article ?"
        );
        if (confirmBox === true) {
          handleDelete()
        }
      }}
    >
      <Icon.Trash className="link-danger" size="1.3rem" />
    </Button>
  );
};

// Export component
export default DeleteItem;
