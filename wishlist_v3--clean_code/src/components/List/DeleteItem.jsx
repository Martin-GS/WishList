import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';
import { getToken } from '../../utils/auth';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import './list.scss';

const DeleteItem = ({ itemObj, listId, loadLists }) => {

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);
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

  const showDeleteModal = () => { setDisplayConfirmationModal(true); };
  const hideConfirmationModal = () => { setDisplayConfirmationModal(false); };
  const submitDelete = () => { handleDelete(); setDisplayConfirmationModal(false); };

  return (

    <>

      <Button
        className="delete-item bg-light border-0"
        onClick={() => showDeleteModal()}
      >
        <Icon.Trash className="link-danger" size="1.3rem" />
      </Button>

      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} />

    </>
  );
};

export default DeleteItem;