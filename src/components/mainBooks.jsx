
import Data from "../data/db.json";

import { v4 as uuidv4 } from "uuid";
import Card from './card';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MainBooks = () => {
    const [loaded, setLoaded] = useState(10)
    const [I, setI] = useState(0)
    const [scrollStyle, setscrollStyle] = useState(false)


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    let books = [];

    const load = () => {
        books = []
        for (let i = I; i < loaded; i++) {
            const bookCover = Data[i].cover
            const bookTitle = Data[i].title
            const bookIndex = i

            const book = {
                key: uuidv4(),
                content: <Card bookTitle={bookTitle} bookCover={bookCover} bookIndex={bookIndex} />
            }
            books.push(book)
        }
    }

    load()

    const scroll = () => {
        const booksSection = document.getElementById('Books');
        window.scrollTo({
            top: booksSection.offsetTop - 100,
        })
    }


    const handelLoadMore = () => {
        if (I < Data.length) {
            setI(I + 10);
            setLoaded(loaded + 10);
            scroll();
        }

    }
    const handelLoadLess = () => {
        if (I > 0) {
            setI(I - 10);
            setLoaded(loaded - 10);
            scroll();
        }

    }





    return (
        <div className="container m-auto mt-16 ">
            
            <h1 className="text-center font-semibold mt-7 text-4xl text-gray-700">تصفح الكتب</h1>


            <div id="Books" className=" bg-white mt-12">
                <div className="flex flex-col items-end">
                    <p className="text-right  p-5">عدد الكتب الموجودة   <span className="text-green-400">{loaded-10} - </span><span className="text-green-400">{loaded}</span> من <span className="text-green-400">{Data.length}</span></p>
                    <div className="  bg-green-500 cursor-pointer rounded-lg drop-shadow-md  text-white p-5 hover:bg-green-600 shadow  w-max m-5" onClick={() => setscrollStyle(!scrollStyle)}>تغير الشكل</div>

                </div>

                <div className={` ${scrollStyle === false ? 'flex flex-wrap gap-20 p-2 md:p-5 items-center justify-center ' : ' catCard flex overflow-x-scroll overflow-y-hidden p-5 gap-8'}`}>
                    {books.map((b) => {
                        return (
                            <div className="w-60" key={b.key}>{b.content}</div>
                        );
                    })}
                </div>


            </div>

            <div className="flex justify-center mt-8 gap-6 ">
                <div
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 mb-4 cursor-pointer flex flex-row-reverse items-center gap-2"
                    onClick={handelLoadLess}
                >
                    الصفحة السابقة <FontAwesomeIcon icon={faArrowLeft} />
                </div>

                <div
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 mb-4 cursor-pointer flex items-center gap-2"
                    onClick={handelLoadMore}
                >
                    الصفحة التالية <FontAwesomeIcon icon={faArrowRight} />
                </div>


            </div>





            <button
                className="fixed bottom-8 right-8 bg-green-400 hover:bg-green-500 text-white rounded-full p-3 shadow-lg"
                onClick={scrollToTop}
            >
                <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
            </button>




        </div>);

}

export default MainBooks;