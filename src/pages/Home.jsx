import Slider from './../components/slider';

import { v4 as uuidv4 } from "uuid";
import data from "../data/db.json";
import Card from './../components/card';
import MainBooks from '../components/mainBooks';
import Search from './../components/search';

const Home = () => {

    let randomCards = []

    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 3000) + 1;
        const bookCover = data[randomNumber].cover
        const bookTitle = data[randomNumber].title
        const bookIndex = randomNumber

        const book = {
            key: uuidv4(),
            content: <Card bookTitle={bookTitle} bookCover={bookCover} bookIndex={bookIndex} />
        }
        randomCards.push(book)
    }



return (
         <>
         <Slider randomCards={randomCards} />

         <Search />

         <MainBooks />   

         

    </> );
}
 
export default Home;