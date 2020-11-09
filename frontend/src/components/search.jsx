import React, { useState } from 'react';
import '../App.css'
import axios from "axios";
import { Row, ButtonGroup, ToggleButton, Button } from 'react-bootstrap';
import Layout from './layout'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Search() {
    const [artist, setArtist] = useState("Jack Johnson");
    const [displayArtist, setDisplayArtist] = useState("");
    const [itunesFetchComplete, setItunesFetchComplete] = useState([]);
    const [searchBanner, setsearchBanner] = useState("");
    const [radioValue, setRadioValue] = useState('song');
    const [favorites, setfavorites] = useState([]);



    const radios = [
        { name: 'Music', value: 'song' },
        { name: 'Books', value: 'ebook' },
        { name: 'App', value: 'software' },
        { name: 'Podcast', value: 'podcast' },
    ];



    //adding to local storage
    const addToFav = (fav) => {
        setfavorites([...favorites, fav])
    }
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);





    const clickHandler = () => {
        axios.get(`/media`, { params: { artist, radioValue } })
            .then(function (response) {
                // handle success
                const mediaSearchResults = response.data.results;
                setItunesFetchComplete(mediaSearchResults ? mediaSearchResults : []);
                setsearchBanner("Search Results for")
                setDisplayArtist(artist);

            })

            .catch(function (error) {
                console.log(error);
            })
    }

    let inputData = "";
    const inputHandler = (e) => {
        const rawInputData = (e.target.value);
        inputData = rawInputData
        setArtist(inputData);
    }



    return (
        <div className="search-screen-background" >
            <div className="search-screen-content ">
                <header>
                    <Link to="/"> <div style={{ color: "white" }} className="iSearch" >
                        <span className="fa fa-apple">
                        </span>iSearch</div>
                    </Link>
                    <br />
                    <div class="input" >
                        <input type="text" class="input" placeholder="Search" onChange={inputHandler} />
                        <button type="submit" onClick={clickHandler}><i class="fa fa-search"></i></button>
                    </div>


                    <ButtonGroup toggle >
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="danger"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <br />
                    <Link to="/favorites"><Button variant="warning" >View Favorites</Button>{' '} </Link>


                </header>

                <div>
                    <div className="below-header">
                        <h1> {searchBanner} </h1>
                        <h1>{displayArtist}</h1>
                    </div>

                    <div className="search-page" >

                        <div className="container-fluid" >
                            <Row md={5}>
                                {

                                    itunesFetchComplete.length !== 0 ?
                                        itunesFetchComplete.map(info => (<Layout addToFav={addToFav} info={info} />)) :
                                        <h1></h1>


                                }
                            </Row>

                        </div>
                    </div >


                </div>
            </div>
        </div >
    );
}

export default Search