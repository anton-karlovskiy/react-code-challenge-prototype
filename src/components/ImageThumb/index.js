
import React from 'react';
import PropTypes from 'prop-types';

import './image-thumb.css';

const ImageThumb = ({ id, title, url, thumbnailUrl }) => {
  return (
    <div className='image-thumb'>
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

ImageThumb.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  thumbnailUrl: PropTypes.string
};

export default ImageThumb;
