// Imports packages and hooks
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Import style
import './lists.scss';

// Component
const DeleteList = () => {

  return (

    <Button className="bg-light border-0">
      <Icon.Trash className="link-secondary" size="1.5em" />
    </Button>

  );
};

// Export component
export default DeleteList;
