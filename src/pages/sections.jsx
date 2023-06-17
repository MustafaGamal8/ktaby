import { Link, useParams } from "react-router-dom";
import Data from "../data/db.json";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Sections = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const [fav, setFav] = useState(false);
    const [loadMore, setLoadMore] = useState(5)
     let { sec } = useParams();
    let books = [];
    let count = 0;

    const handleFavoriteClick = (bookIndex) => {
        // Check if the book index is already in favorites
        const index = favorites.indexOf(bookIndex);
        if (index === -1) {
            // Book index is not in favorites, add it
            favorites.push(bookIndex);
        } else {
            // Book index is already in favorites, remove it
            favorites.splice(index, 1);
        }
        setFav(!fav);

        // Update localStorage with the updated favorites array
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    for (let i = 0; i < Data.length; i++) {
        if (Data[i].category === sec) {
            const b = {
                bookCover: Data[i].cover,
                bookTitle: Data[i].title,
                bookIndex: i
            };
            books.push(b);
            count++;

            if (count === loadMore) {
                break;
            }
        }
    }useEffect(() => {
        // Reset the loadMore state when sec parameter changes
        setLoadMore(5);
      }, [sec]);
    
    return (
        <>
            <h1 className="text-center font-semibold mt-7 text-4xl">{sec}</h1>

            <div className="container mx-auto py-8 flex flex-wrap gap-8 items-center justify-center">
  {books.map((b, index) => {
    const isFavorite = favorites.includes(b.bookIndex);

    return (
      <div
        className="bg-white w-52 h-80 hover:z-10 mb-5"
        key={index}// Customize the size here
      >

        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-100 ">
            
        <Link to={`/book/${b.bookIndex}`} className="cursor-pointer h-full w-full">
          <LazyLoadImage
            src={b.bookCover}
            alt="Book Cover"
            className="w-full h-full rounded-lg"
            effect="blur"
          /></Link>
          
          <div
            className={`bg-white text-green-400 absolute top-0 right-0 p-2 rounded-bl-lg ${
              isFavorite ? 'text-red-400' : ''
            }`}
            onClick={() => handleFavoriteClick(b.bookIndex)}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className="text-lg hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
        
        <div className="mt-4 text-center bg-white">
          <p className="text-lg font-semibold text-gray-800">{b.bookTitle}</p>
        </div>
      </div>
    );
  })}
</div>




            <div className="flex justify-center mt-8">
            <div
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 mb-4 cursor-pointer"
              onClick={()=>{setLoadMore(loadMore + 10)}}
            >
              عرض المزيد
            </div>
          </div>



        </>
    );
};

export default Sections;
