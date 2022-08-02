// Imports packages and hooks
import React, { useState } from 'react';
import axios from 'axios';

// Import auth
import { getToken } from '../../utils/auth';

// Import style
import { Button } from 'react-bootstrap';
import './lists.scss';

// Import images
import * as Icon from 'react-feather';

// Component
const DeleteList = ({ getList }) => {

  // States
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const listid = getList.id;
  const token = getToken();

  const handleRemove = () => {
    setLoading(true);
    setIsError(false);

    axios.get(`https://onedream-onewish.herokuapp.com/list/delete/${listid}`, {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setIsError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (data) {
    window.location.reload(false);
  }

  return (
    <Button
      className="bg-light border-0"
      onClick={() => {
        const confirmBox = window.confirm(
          "Voulez vous supprimer cette liste ?"
        );
        if (confirmBox === true) {
          handleRemove()
        }
      }}
    >
      <Icon.Trash className="link-secondary" size="1.5em" />
    </Button>
  );

};

// Export component
export default DeleteList;
