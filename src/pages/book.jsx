import { useParams, Link } from 'react-router-dom';
import data from "../data/db.json"
import Card from './../components/card';

import { v4 as uuidv4 } from "uuid";
import { useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';


const Book = () => {
    const { index } = useParams();
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const [fav, setFav] = useState(favorites.includes(index))
    const [showNotification, setShowNotification] = useState(false);

  const handleAddToFavorites = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide the notification after 2 seconds
  };
    
    const book = {
        bookCover: data[index].cover,
        bookTitel: data[index].title,
        bookAuthor: data[index].author,
        bookCategory: data[index].category,
        bookDescribtion: data[index].describtion,
        bookLink: data[index].link,
    }

    
    const handelFav = () => {

        fav === false ? setFav(true) : setFav(false)
        if (!favorites.includes(index)) {
            favorites.push(index);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            handleAddToFavorites()

        } else {
            favorites = favorites.filter(obj => obj !== index)

            localStorage.setItem('favorites', JSON.stringify(favorites));

        }

    }

    let result = [];
    let randomBooksList = []


    const sameCategory = () => {
        result = [];
        let count = 0;

        let randomNumber = Math.floor(Math.random() * 2900) + 1;

        for (var i = randomNumber; i < data.length; i++) {
            var b = data[i];

            if (b.category === book.bookCategory) {
                const bookCover = b.cover
                const bookTitle = b.title
                const bookIndex = i

                const book = {
                    key: uuidv4(),
                    content: <Card bookTitle={bookTitle} bookCover={bookCover} bookIndex={bookIndex} />
                }
                result.push(book)
                count++


                if (count === 5) {
                    break;
                } else {
                    i = randomNumber = Math.floor(Math.random() * 3000) + 1;
                }
            }
        }

    }


    const randomBooks = () => {
        randomBooksList = []

        for (let i = 0; i < 5; i++) {
            let randomNumber = Math.floor(Math.random() * 3000) + 1;
            const bookCover = data[randomNumber].cover
            const bookTitle = data[randomNumber].title
            const bookIndex = randomNumber
            const b = {
                key: uuidv4(),
                content: (
                    <Card bookTitle={bookTitle} bookCover={bookCover} bookIndex={bookIndex} />
                )
            }
            randomBooksList.push(b)
        }
    }
    
        randomBooks()
        sameCategory()







    return (
        <>
            <div className='w-4/5 m-auto md:mt-8 flex flex-col items-center bg-white shadow-lg  pb-8' >

                <div className='  w-full md:h-full h-80 rounded-3xl  justify-center flex items-center flex-col-reverse md:flex-col-reverse'>
                    <div className='text-center mr-2'>
                        <h1 className='md:text-2xl text-xl font-semibold  text-green-400'>{book.bookTitel}</h1>
                        <p className='md:text-xl text-lg '><span className='text-red-400' >بواسطة</span> : {book.bookAuthor}</p>
                        <p className='md:text-xl text-lg '><span className='text-red-400'>التصنيف</span>: <Link to={`/section/${book.bookCategory}`} className='underline'>{book.bookCategory}</Link></p>
                    </div>

                    <div className='group  bg-green-300 rounded-bl-full rounded-br-full lg:bg-green-400  lg:w-max lg:p-10 lg:rounded-none flex justify-center w-full overflow-hidden'>
                        <div className='  lg:w-max lg:bg-white lg:p-5  '>
                            <img src={book.bookCover} alt="error" className='h-full w-96 rounded  drop-shadow-xl  group-hover:scale-105 duration-500' />
                        </div>
                    </div>
                </div>



                <div className=' mt-2 rounded-sm w-full p-2 text-right'>
                    <h1 className='m-2 text-2xl font-semibold text-green-400'>:الوصف</h1>
                    <p className=' md:text-xl '>
                        {book.bookDescribtion}
                    </p>
                </div>



                <div className='flex items-center justify-around'>
                    <div className='group lg:text-3xl text-md rounded bg-white m-3 md:p-3 p-2 whitespace-nowrap shadow-md hover:bg-green-400 hover:text-white cursor-pointer transition-all duration-300'>
                        <Link to={book.bookLink}>
                            <h1>
                                <FontAwesomeIcon icon={faFilePdf} className='text-red-400 group-hover:text-white' /> تحميل
                            </h1>
                        </Link>
                    </div>
                    <div className='group lg:text-3xl text-md rounded bg-white m-3 md:p-3 p-2 whitespace-nowrap shadow-md hover:bg-green-400 hover:text-white cursor-pointer transition-all duration-300'>
                        <Link target='blank' to={`https://drive.google.com/viewerng/viewer?embedded=true&url=${book.bookLink}`}>
                            <h1>
                                <FontAwesomeIcon icon={faEye} className='text-green-400 group-hover:text-white' /> عرض
                            </h1>
                        </Link>
                    </div>
                    <div
                        className='lg:text-3xl text-md rounded bg-white m-3 md:p-3 p-2 whitespace-nowrap shadow-md hover:bg-green-400 hover:text-white cursor-pointer transition-all duration-300'
                        onClick={handelFav}
                        style={fav === false ? { "background": "white", "color": "#9ca3af" } : { "background": "#f87171", "color": "white" }}
                    >
                        <h1>
                            <FontAwesomeIcon icon={faHeart} className='lg:text-2xl text' /> المفضلة
                        </h1>
                    </div>
                </div>


            </div>

            <div className='w-4/5 m-auto shadow bg-white mt-20  select-none py-1'>
                <h1 className='text-center font-semibold text-3xl m-9 text-red-400'>{book.bookCategory}</h1>
                <div className='catCard h-full flex  items-center justify-between  gap-3 overflow-x-scroll md:scale-90 pb-4 shadow '>
                    {result.map((b) => <div onClick={() => setFav(false)} key={b.key}>{b.content}</div>)}
                </div>

            </div>

            <div className='w-4/5 m-auto shadow bg-white mt-20  select-none py-1 '>
                <h1 className='text-center font-semibold text-2xl mb-5 text-green-400'>عشوائي</h1>
                <div className='catCard h-full flex  items-center justify-between  gap-3 overflow-x-scroll md:scale-90 pb-4 shadow '>
                    {randomBooksList.map((b) => <div onClick={() => setFav(false)} key={b.key}>{b.content}</div>)}
                </div>
            </div>












            <div className="fixed top-0 right-0 mt-4 mr-4">
      
      {showNotification && (
        <div className="bg-green-500 text-white py-2 px-4 rounded mt-2">
         <FontAwesomeIcon icon={faHeart} /> تم الاضافة الي المضلة 
        </div>
      )}
    </div>
        </>);

}

export default Book;