import PropTypes from 'prop-types';

const SuggestionList = ({ suggestions, onSelect }) => {
  return (
    <ul className="absolute w-full bg-gray-800 border border-gray-700 rounded-b-lg mt-1 max-h-60 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <li 
          key={index} 
          onClick={() => onSelect(suggestion)}
          className="p-3 hover:bg-gray-700 cursor-pointer border-b border-gray-700 last:border-b-0"
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SuggestionList;
