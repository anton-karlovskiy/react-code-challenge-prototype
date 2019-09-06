
import React from 'react';
import PropTypes from 'prop-types';

import FavoriteBadge from '../FavoriteBadge';
import './image-thumb.css';

// ray test touch <
const ImageThumb = ({ id, title, url, thumbnailUrl, clickHandler }) => {
// ray test touch >
  return (
    <div className='image-thumb'>
      {/* ray test touch < */}
      <img src={thumbnailUrl} alt={title} onClick={clickHandler} />
      {/* ray test touch > */}
      <FavoriteBadge imageId={id} />
    </div>
  );
};

ImageThumb.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

export default ImageThumb;
