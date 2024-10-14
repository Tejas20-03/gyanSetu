import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const CardList = ({ itemTitle }) => {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&exintro=true&explaintext=true&titles=${encodeURIComponent(itemTitle)}&pithumbsize=500&origin=*`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const page = Object.values(data.query.pages)[0];
        setItemData({
          title: page.title,
          extract: page.extract,
          image: page.thumbnail ? page.thumbnail.source : null
        });
      });
  }, [itemTitle]);

  return (
    <div className="mt-8">
      {itemData && <ItemCard item={itemData} />}
    </div>
  );
};

CardList.propTypes = {
  itemTitle: PropTypes.string.isRequired
};

export default CardList;
