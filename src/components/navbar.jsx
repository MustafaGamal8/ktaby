import React, { useState } from 'react';
import "../css/animitions.css"
import { v4 as unikey } from "uuid";
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestion, faHeart, faHouse, faList } from '@fortawesome/free-solid-svg-icons';




const NavBar = () => {
    const [subMenu, setSubMenu] = useState(false)
    let menuSections = ["إدارة أعمال", "تكنولوجيا", 'تاريخ', 'اقتصاد', 'أديان', 'أدب رحلات', 'أدب', 'جغرافيا', 'صحة', 'شعر', 'سير الأعلام', 'خيال علمي', 'علوم', 'علم نفس', 'علوم اجتماعية ', 'علوم البيئة', 'علوم اللغة', 'فلسفة', 'فنون', 'قصص الأطفال', 'قصص بوليسية', 'مسرحيات', 'نقد أدبي', 'الروايات ']


    const toggleMenu = () => {
        setSubMenu(subMenu === false ? true : false)
    }

    const scroll = ()=>{
        const booksSection = document.getElementById('Books');
        
        if (booksSection) {
            window.scrollTo({
                top: booksSection.offsetTop,
                behavior: 'smooth',
              })
        }
    }

    return (
        <nav className='select-none'>
            <div className='flex items-center justify-between p-5 bg-white drop-shadow-sm h-16 '>
                <div className='text-center cursor-pointer group'><Link to={"/help"}><h1><FontAwesomeIcon icon={faQuestion} className="text-green-500 group-hover:scale-150 transition-all duration-300" /> <br />مساعدة</h1></Link></div>
                <h1 className='text-2xl font-semibold'><Link to={"/"}><FontAwesomeIcon icon={faBook} className='text-gray-700 mr-2' /> كتابي</Link></h1>

                <div className='text-center cursor-pointer group'><Link to={"/fav"}><h1><FontAwesomeIcon icon={faHeart} className="text-red-400 group-hover:scale-150 transition-all duration-300" /><br />المفضلة</h1></Link></div>
            </div>

            <ul className='flex flex-row-reverse justify-around whitespace-nowrap items-center bg-green-500 h-12 text-white md:text-lg drop-shadow-xl relative'>
                <li className='hover:bg-white hover:text-green-500 rounded-md p-2 transition-all duration-300 cursor-pointer' ><NavLink to={"/"}><FontAwesomeIcon icon={faHouse} className="mr-2" />الرئيسية</NavLink></li>
                <li className='hover:bg-white hover:text-green-500 rounded-md p-2 transition-all duration-300 cursor-pointer relative' onClick={toggleMenu} ><FontAwesomeIcon icon={faList} className="md:mr-1" /> الأقسام</li>
                <li className='hover:bg-white hover:text-green-500 rounded-md p-2 transition-all duration-300 cursor-pointer' ><NavLink to={"/otherwebsites"}>مواقع اخري</NavLink></li>
                <li className='hover:bg-white hover:text-green-500 rounded-md p-2 transition-all duration-300 cursor-pointer' ><NavLink to={"/me"}><FontAwesomeIcon icon={faQuestion} className="fa-flip-horizontal mr-2" />من نحن </NavLink></li>
            </ul>
            {subMenu &&
                <div className=' transition-all pt-2 w-full rounded bg-white drop-shadow-2xl'>
                    <ul className=' flex flex-col  flex-wrap h-48 w-full gap-1 bg-white' style={{ direction: 'rtl', textAlign: 'right' }}>
                        <li className='bg-green-500 text-white text-center hover:scale-125 duration-500 ' onClick={scroll}>كل الكتب</li>
                        {menuSections.map((s) => <Link onClick={toggleMenu} to={`/section/${s}`} key={unikey()} ><li className='text-green-500 hover:cursor-pointer bg-white text-center hover:scale-125 hover:bg-green-500 hover:text-white duration-500 '>{s}</li></Link>)}
                    </ul>

                </div>}
        </nav>
    );
}

export default NavBar;
