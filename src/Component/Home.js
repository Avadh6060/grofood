import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Categories from './Categories';
import Grocery from './Grocery';
import Food from './Food';
import './Style/Home.css';


const Home = () => {



    return (
        <>
            <Header />
            <p class="container Categories">Categories</p>
            <Categories />
            <p className="container Categories">Trending Grocery</p>
            <Grocery />
            <p className="container Categories">Trending Foods</p>
            <Food />

        </>
    )
}

export default Home
