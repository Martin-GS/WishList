// Import modules
import React from 'react';

// Import style
import { Button } from 'react-bootstrap';
import './list.scss';

// Import images
import * as Icon from 'react-feather';

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
