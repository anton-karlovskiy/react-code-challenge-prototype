
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IconButton, { IconToggle } from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon';
import '@material/react-icon-button/dist/icon-button.css';

import { addMovieToFavorites, removeMovieFromFavorites } from '../../actions/favorites';
import './favorite-badge.css';

const FavoriteBadge = ({ inFavorites, onAdd, onRemove }) => {
  return (
    <IconButton
      className='favorite-color'
      onClick={event => {
        event.preventDefault();
        return inFavorites ? onRemove() : onAdd();
      }}>
      { inFavorites ? (
        <IconToggle isOn>
          <MaterialIcon icon='favorite' />
        </IconToggle>
      ) : (
        <IconToggle>
          <MaterialIcon icon='favorite_border' />
        </IconToggle>
      ) }
    </IconButton>
  );
};

FavoriteBadge.propTypes = {
  imageId: PropTypes.number.isRequired,
  inFavorites: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  inFavorites: state.favorites.includes(ownProps.imageId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: () => dispatch(addMovieToFavorites(ownProps.imageId)),
  onRemove: () => dispatch(removeMovieFromFavorites(ownProps.imageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteBadge);
