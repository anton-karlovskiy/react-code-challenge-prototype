
import React, { useState, useEffect } from 'react';

import FourColGrid from '../../components/FourColGrid';
import ImageThumb from '../../components/ImageThumb';
import LoadMoreBtn from '../../components/LoadMoreBtn';
import Spinner from '../../components/Spinner';
import { API_URL } from '../../config';
import './image-gallery.css';

const limit = 8; // TODO: set in config
const totalPages = 5000 / limit; // TODO: API needs to provide total pages and current page e.g. https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=3

const ImageGallery = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    loadMoreResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResults = async endpoint => {
    try {
      const response = await fetch(endpoint);
      const resResults = await response.json();

      setResults([...results, ...resResults]);
      setLoading(false);
      setCurrentPage(currentPage + 1); // TODO: error prone -> Re: https://stackoverflow.com/questions/56247433/how-to-use-setstate-callback-on-react-hooks
    } catch (error) {
      console.log('[ImageGallery fetchResults] error => ', error);
    }
  };

  const loadMoreResults = () => {
    setLoading(true);
    const endpoint = `${API_URL}?_start=${currentPage}&_limit=${limit}`;

    fetchResults(endpoint);
  };

  return (
    <div className='home'>
      <div className='home-grid'>
        <FourColGrid
          header='Photo Gallery'
          loading={loading}>

          { results.map(result => {
            return (
              <ImageThumb
                key={result.id}
                id={result.id}
                url={result.url}
                title={result.title}
                clickable
                thumbnailUrl={result.thumbnailUrl} />
            );
          }) }

        </FourColGrid>
        { loading && <Spinner /> }
        { currentPage <= totalPages && !loading && (
          <LoadMoreBtn text='Load More' onClick={loadMoreResults} />
        ) }
      </div>
    </div>
  );
};

export default ImageGallery;
