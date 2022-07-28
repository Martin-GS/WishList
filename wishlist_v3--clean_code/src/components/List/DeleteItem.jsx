// Import modules
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Import style
import './list.scss';

// Component
const DeleteItem = () => {
  return (
    <Button className="delete-item bg-light border-0">
      <Icon.Trash className="link-danger" size="1.3rem" />
    </Button>
  );
};

// Export component
export default DeleteItem;
