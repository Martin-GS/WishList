// Import packages/modules
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';

// Import stylesheet
import './list.scss';

// Component
const DeleteItem = ({ itemObj, listId }) => {

  return (

    <Button className="bg-light border-0">
      <Icon.Trash className="link-secondary" size="1.3em" />
    </Button>

  );
};

// Export component
export default DeleteItem;
