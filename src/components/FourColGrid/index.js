
import React from 'react';
import './four-col-grid.css';

const FourColGrid = ({ header, loading,  children }) => {
  const renderElements = () => {
    const gridElements = children.map((element, i) => {
      return (
        <div key={i} className='grid-element'>
          {element}
        </div>
      );
    });
    return gridElements;
  };

  return (
    <div className='grid'>
      { header && !loading ? <h1>{header}</h1> : null }
      <div className='grid-content'>{renderElements()}</div>
    </div>
  );
};

export default FourColGrid;
