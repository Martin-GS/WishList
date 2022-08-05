import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { getToken } from '../../utils/auth';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';

const DeleteList = ({ list, fetchLists }) => {

  const [, setData] = useState(null);
  const [, setLoading] = useState(false);
  const [, setIsError] = useState(false);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);

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

  const showDeleteModal = () => {
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    handleDelete();
    setDisplayConfirmationModal(false);
  };

  return (

    <>
      <Button
        className="bg-light border-0"
        onClick={() => showDeleteModal()}
      >
        <Icon.Trash className="link-secondary" size="1.5em" />
      </Button>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
      />
    </>

  );

};

export default DeleteList;