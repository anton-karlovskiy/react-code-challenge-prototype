
import React from 'react';
import PropTypes from 'prop-types';

import FavoriteBadge from '../FavoriteBadge';
import './image-thumb.css';

const ImageThumb = ({ id, title, url, thumbnailUrl }) => {
  return (
    <div className='image-thumb'>
      <img src={thumbnailUrl} alt={title} />
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
