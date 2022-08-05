import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { getToken } from '../../utils/auth';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import './list.scss';

const DeleteItem = ({ itemObj, listId, loadLists }) => {

  const [, setData] = useState(null);
  const [, setLoading] = useState(false);
  const [, setIsError] = useState(false);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);

  const itemid = itemObj.id;
  const idlist = listId;
  const token = getToken();

  const handleDelete = () => {

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
        loadLists();
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
        className="delete-item bg-light border-0"
        onClick={() => showDeleteModal()}
      >
        <Icon.Trash className="link-danger" size="1.3em" />
      </Button>

      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
      />
    </>
  );
};

export default DeleteItem;