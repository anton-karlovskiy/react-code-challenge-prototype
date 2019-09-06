
import React, { useEffect } from 'react';

import FourColGrid from '../../components/FourColGrid';
import ImageThumb from '../../components/ImageThumb';
import LoadMoreBtn from '../../components/LoadMoreBtn';
import Spinner from '../../components/Spinner';
import { useEffectiveConnectionType } from '../../utils/hooks';
import { connectTo } from '../../utils/generic';
import { getGalleryImages } from '../../actions/gallery-images';
import './image-gallery.css';

const ImageGallery = ({ getGalleryImages, isLoading, results, favorites }) => {
  const connectionEffectiveType = useEffectiveConnectionType();
  let limit;
  switch(connectionEffectiveType) {
    case 'slow-2g':
    case '2g':
      limit = 8;
      break;
    case '3g':
      limit = 16;
      break;
    case '4g':
      limit = 24;
      break;
    default:
      limit = 24;
      break;
  }

  useEffect(() => {
    loadMoreResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreResults = () => {
    getGalleryImages(limit);
  };

  return (
    <div className='home'>
      <div className='home-grid'>
        <FourColGrid
          header={`Number of Favorites: ${favorites.length}`}
          loading={isLoading}>
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
        { isLoading && <Spinner /> }
        {/* TODO: API needs to provide total pages and current page e.g. https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=3 */}
        {/* here is error prone in case pagination might reach the end of resources */}
        { !isLoading && (
          <LoadMoreBtn text='Load More' onClick={loadMoreResults} />
        ) }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.galleryImages.isFetching,
  results: state.galleryImages.results,
  favorites: state.favorites
});

const mapActionsToProps = {
  getGalleryImages
};

export default connectTo(mapStateToProps, mapActionsToProps, ImageGallery);
