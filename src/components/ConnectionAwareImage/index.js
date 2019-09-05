
import React from 'react';

import { useConnectionEffectiveType } from '../../utils/hooks';
import { IMAGE_BASE_URL, IMAGE_SIZES } from '../../config';

const ConnectionAwareImage = ({ id, alt, ...rest }) => {
  const connectionEffectiveType = useConnectionEffectiveType();

  let imageSize;

  switch(connectionEffectiveType) {
    case 'slow-2g':
      imageSize = 200;
      break;
    case '2g':
      imageSize = 300;
      break;
    case '3g':
      imageSize = 400;
      break;
    case '4g':
      imageSize = 600;
      break;
    default:
      imageSize = 600;
      break;
  }

  if (!IMAGE_SIZES.has(imageSize)) {
    throw new Error('The image size is not supported.');
  }

  const imgUrl = id && `${IMAGE_BASE_URL}${imageSize}${id}`;

  return (
    <img src={imgUrl} alt={alt} {...rest} />
  );
};

export default ConnectionAwareImage;
