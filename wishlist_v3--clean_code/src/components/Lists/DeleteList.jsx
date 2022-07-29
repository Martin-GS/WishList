// Imports packages and hooks
import React from 'react';

// Import style
import { Button } from 'react-bootstrap';
import './lists.scss';

// Import images
import * as Icon from 'react-feather';

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
