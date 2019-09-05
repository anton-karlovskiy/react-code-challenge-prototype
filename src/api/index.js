
import { BASE_API_URL } from '../config';

const generateQueryString = (params = {}) => {
  return Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
};

const generateUrl = (path, params = {}) => {
  const query = generateQueryString(params);

  return `${BASE_API_URL}${path}?${query}`;
};

const throwCommonError = data => {
  if (data.errors && data.errors.length) {
    throw new Error(data.errors.join(' | '));
  }

  throw new Error(`${data.status_message} (error code: ${data.status_code})`);
}

const handleApiCall = async url => {
  const response = await fetch(url);
  const data = await response.json();
  
  if (!response.ok) {
    throwCommonError(data);
  }

  return data;
};

const getGalleryImages = (page = 0, limit = 24) => {
  const url = generateUrl('photos', { _start: page, _limit: limit });
  
  return handleApiCall(url);
};

export {
  getGalleryImages
};
