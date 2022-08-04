import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { getToken } from '../../utils/auth';
import './lists.scss';

const DeleteList = ({ list, fetchLists }) => {

  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);

  const listid = list.id;
  const token = getToken();

  const handleDelete = () => {

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
        fetchLists();
      });

  };

  return (
    <Button
      className="bg-light border-0"
      onClick={() => {
        const confirmBox = window.confirm(
          "Voulez vous supprimer cette liste ?"
        );
        if (confirmBox === true) {
          handleDelete()
        }
      }}
    >
      <Icon.Trash className="link-secondary" size="1.5em" />
    </Button>
  );

};

export default DeleteList;