import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Data from "../data/db.json";
import Card from './card';
import { v4 as uuidv4 } from "uuid";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value === "") {
      setBooks([]);
      setSearchSuggestions([])
    } else {
      const modifiedSearchTerm = removeArabicAlefWithHamza(value);
      const suggestions = Data.filter((b,index) => {
        const modifiedTitle = removeArabicAlefWithHamza(b.title);
        if (modifiedTitle.includes(modifiedSearchTerm)) {
            b.index = index;
            return true;
          }
          return false;
      });
      setSearchSuggestions(suggestions);
    }
  };

  function removeArabicAlefWithHamza(str) {
    let text = str.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '');
    return text.replace(/أ/g, 'ا');
  }

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm !== "") {
      const modifiedSearchTerm = removeArabicAlefWithHamza(searchTerm);
      const filteredBooks = Data.filter((b,index) => {
        const modifiedTitle = removeArabicAlefWithHamza(b.title);
        if (modifiedTitle.includes(modifiedSearchTerm)) {
            b.index = index;
            return true;
          }
          return false;
      });
      setBooks(filteredBooks);
      setSearchSuggestions([])
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setBooks([suggestion]);
    setSearchSuggestions([]);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className='text-center m-5 text-4xl text-gray-700 font-semibold'>بحث</h1>
      <form className="flex items-center bg-green-400 rounded-lg p-2 w-full h-16" onSubmit={handleSearch}>
        <input
          id='bookSearch'
          type="text"
          placeholder="ابحث عن الكتب"
          autoComplete='off'
          value={searchTerm}
          onChange={handleInputChange}
          className="flex-grow bg-transparent outline-none text-white placeholder-white text-right"
        />
        <label htmlFor='bookSearch' className="ml-2 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </label>
      </form>

      {searchSuggestions.length > 0 && (
        <ul className="bg-white mt-2 p-2 rounded-lg text-right">
          {searchSuggestions.map((suggestion) => (
            <li
              key={uuidv4()}
              className="cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-lg"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.title}
            </li>
          ))}
        </ul>
      )}

      <h1 className='w-full text-right mt-5'>عدد الكتب المطابقة للبحث <span className='text-green-400'>{books.length}</span></h1>
      <div className='catCard flex overflow-x-scroll overflow-y-hidden p-5 gap-8'>
        {books.map((b) => (
            
          <Card key={uuidv4()} bookCover={b.cover} bookIndex={b.index} bookTitle={b.title} />
        ))}
      </div>
    </div>
  );
};

export default Search;
