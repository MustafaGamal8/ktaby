import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card({ bookTitle, bookCover, bookIndex }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }
  // console.log(bookIndex)

  return (
    
    <Link to={`/book/${bookIndex}`} onClick={scrollToTop} className='flex items-center justify-center '>
      <div className="relative drop-shadow-2xl flex flex-col items-center justify-between h-full w-52 md:w-80 cursor-pointer rounded-md">
            <LazyLoadImage
            className="w-full h-full rounded-md"
              src= {bookCover}
              alt={bookTitle}
              effect="blur"
            />

            <div className="opacity-0 rounded-md transition-all duration-150 hover:opacity-50 bg-black h-full w-full white absolute top-0 right-0 flex items-center justify-center text-white  md:text-4xl text-sm text-center">
              <h2>{bookTitle}</h2>
            </div>
      </div>
    </Link>
  );
}

export default Card;
