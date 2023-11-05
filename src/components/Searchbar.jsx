import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center space-x-2 w-full max-w-[500px]">
      <input
        type="text"
        placeholder="Search for books"
        className="border border-black rounded-lg px-2 py-1 !w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-700" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};
