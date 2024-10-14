import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SuggestionList from './SuggestionList';

const SearchBar = ({ onItemSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const endpoint = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm}&limit=10&namespace=0&format=json&origin=*`;
      
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          setSuggestions(data[1]);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (item) => {
    onItemSelect(item);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for any object..."
        className="w-full p-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <SuggestionList suggestions={suggestions} onSelect={handleSelect} />
    </div>
  );
};

SearchBar.propTypes = {
  onItemSelect: PropTypes.func.isRequired
};

export default SearchBar;
