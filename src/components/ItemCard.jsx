import { useState } from 'react';
import PropTypes from 'prop-types';
import ARView from './ARView';

const ItemCard = ({ item }) => {
  const [showAR, setShowAR] = useState(false);

  const handleARView = () => {
    setShowAR(true);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
      {item.image && (
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-300 leading-relaxed max-h-48 overflow-y-auto mb-4">
        {item.extract ? item.extract.slice(0, 300) + '...' : 'No information available.'}
      </p>
      <button 
        onClick={handleARView}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        View in AR
      </button>
      {showAR && <ARView item={item} onClose={() => setShowAR(false)} />}
    </div>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    extract: PropTypes.string
  }).isRequired
};

export default ItemCard;
