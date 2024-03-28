import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const ShareableLink = () => {
  // Generate a unique ID for the link
  const uniqueId = uuidv4();

  // The link path includes the unique ID
  const linkPath = `/share/${uniqueId}`;

  return (
    <div>
      <h2>Your Shareable Link:</h2>
      <p>{window.location.origin + linkPath}</p>
      <Link to={linkPath}>Go to Shareable Link</Link>
    </div>
  );
};

export default ShareableLink;