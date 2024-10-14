import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Object Search</h1>
        <SearchBar onItemSelect={handleItemSelect} />
        {selectedItem && <CardList itemTitle={selectedItem} />}
      </div>
    </div>
  );
};

export default App;
