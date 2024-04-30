import React, { useState, useContext } from 'react';
import { FavoritesContext } from '../../context/FavoritesContext';

const FavoritesModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <button className="btn btn-primary" onClick={toggleModal}>Favorites</button>
      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Favorites</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Map through favorites to display them here */}
                {/* Use removeFavorite function on click of a remove button next to each favorite */}
                <p>Favorite items...</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesModal;
