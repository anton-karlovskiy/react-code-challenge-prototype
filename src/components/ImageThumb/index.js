
import React from 'react';
import PropTypes from 'prop-types';

import FavoriteBadge from '../FavoriteBadge';
import './image-thumb.css';

const ImageThumb = ({ id, title, url, thumbnailUrl, clickHandler, clickable }) => {
  return (
    <div className='image-thumb'>
      <img className={ clickable && 'clickable' } src={thumbnailUrl} alt={title} onClick={clickHandler} />
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
