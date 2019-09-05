
import React from 'react';
import './load-more-btn.css';

const LoadMoreBtn = ({ text, onClick }) => (
  <div className='loadmorebtn' onClick={onClick}>
    <p>{text}</p>
  </div>
);

export default LoadMoreBtn;
