import { useState } from "react";
import Data from "../data/db.json"
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faDownload, faEye, faHeart, faCross } from '@fortawesome/free-solid-svg-icons';


const Favorites = () => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
  const [favorites, setFavorites] = useState(storedFavorites || []);
  const [showNotification, setShowNotification] = useState(false);

  const handleDelete = (index) => {
    const updatedFavorites = favorites.filter((obj) => obj !== index);
    setFavorites(updatedFavorites);

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  const handleRemoveFromFavorites = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide the notification after 2 seconds
  };



    return (
        <div className="w-4/5 m-auto bg-white ">
            <h1 className="text-3xl text-center mt-3">  <i className='fa-solid fa-heart text-2xl text-red-400' ></i> المفضلة</h1>

            <div className="w-full  m-auto md:mt-8 flex flex-col items-center bg-white shadow-lg ">

                {favorites.length === 0 ?    <h1 className="text-xl font-semibold m-3">لا يوجد كتب مفضلة </h1>  : favorites.map((b) => {
                    return (
                        <div className=" w-4/5 mt-5  flex flex-col md:flex-row-reverse items-center justify-between p-3 bg-white shadow-md overflow-hidden " key={uuidv4()}>
                            <div className="flex items-center  w-4/5  justify-start  h-80 md:flex-row-reverse flex-col   gap-3 md:mt-5 md:mb-0  mb-10">
                                <Link className=" h-full" to={`/book/${b}`}>
                                    <div className="h-full   bg-green-400 p-5   flex items-center justify-center">

                                        <div className="h-full w-max  flex items-center justify-center  p-4 bg-white">
                                            <img src={Data[b].cover} alt="" className="h-full  w-full shadow-lg" />

                                        </div>

                                    </div>

                                </Link>
                                <h1 className="text-right text-sm md:text-2xl">{Data[b].title}</h1>

                            </div>

                            <div className="flex gap-5 mt-3 items-center justify-center lg:flex-nowrap flex-wrap">
                                <div className="group text-center gap-2 w-20 h-10 bg-white rounded shadow p-2 cursor-pointer hover:bg-red-400 hover:text-white whitespace-nowrap" onClick={() => {handleDelete(b); handleRemoveFromFavorites()}}>
                                    <FontAwesomeIcon icon={faTrash} className="text-red-400 group-hover:text-white" /> حذف
                                </div>
                                <div className="group text-center w-20 h-10 bg-white rounded shadow p-2 cursor-pointer hover:bg-green-400 hover:text-white whitespace-nowrap">
                                    <Link to={Data[b].link}>
                                        <FontAwesomeIcon icon={faDownload} className="text-green-500 group-hover:text-white" /> تنزيل
                                    </Link>
                                </div>
                                <div className="group text-center w-20 h-10 bg-white rounded shadow p-2 cursor-pointer hover:bg-green-400 hover:text-white whitespace-nowrap">
                                    <Link target='blank' to={`https://drive.google.com/viewerng/viewer?embedded=true&url=${Data[b].link}`}>
                                        <FontAwesomeIcon icon={faEye} className="text-green-400 group-hover:text-white" /> عرض
                                    </Link>
                                </div>
                            </div>

                        </div>

                    )
                })}


<div className="fixed top-0 right-0 mt-4 mr-4">
      
      {showNotification && (
        <div className="bg-green-500 text-white py-2 px-4 rounded mt-2">
         <FontAwesomeIcon icon={faTrash} className="text-red-400" /> تم الازالة من المضلة
        </div>
      )}
    </div>





            </div>

        </div>);
}

export default Favorites;