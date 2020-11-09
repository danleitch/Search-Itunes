import React, { useState } from 'react';
import '../App.css'
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, Col, Button } from 'react-bootstrap';




function Favorites() {
    const [removeFavorite, setRemoveFavorite] = useState();

    const removeItem = (id) => {

        const favorites = (JSON.parse(localStorage.getItem("favorites")))
        const filteredFavorites = favorites.filter(x => x.trackId !== id);
        localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
        window.location.reload()

    }







    const [Displayfavorites, setDisplayfavorites] = useState([]);

    useEffect(() => {
        setDisplayfavorites(JSON.parse(localStorage.getItem("favorites")))
    }, []);


    return (
        <div className="search-screen-background" >
            <div className="search-screen-content ">

                <header>
                    <Link to="/search"> <div style={{ color: "white" }} className="iSearch" >
                        <span className="fa fa-apple">
                        </span>iSearch</div>
                    </Link>
                    <br />
                    <h1>Here are your Favorites</h1>
                    <br />

                </header >
                <div className="container-fluid" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }} >
                    <Row md={5} >
                        {Displayfavorites.map(info => (
                            <Col>
                                <Card className="mb-5 ml-1 mr-1">
                                    <Card.Img variant="top" src={info.artworkUrl100.replace("100x100", "250x250")} />
                                    <Card.Body>
                                        <Card.Title>{info.trackName}</Card.Title>
                                        {info.artistName && <Card.Text>{info.artistName}</Card.Text>}
                                    </Card.Body>
                                    <Card.Footer>
                                        {info.trackPrice &&
                                            <small className="text-muted">Price {info.trackPrice}</small>}
                                        <br />
                                        <Button variant="secondary" onClick={() => removeItem(info.trackId)} >Delete</Button>
                                        <br />
                                        <br />
                                        {info.previewUrl &&
                                            <button> <audio controls src={info.previewUrl} type="audio/mp4"></audio></button>
                                        }
                                        {info.trackViewUrl &&

                                            <a rel="noopener noreferrer" href={info.trackViewUrl} target="_blank" > <Button variant="warning">Click here</Button> </a>
                                        }
                                    </Card.Footer>
                                </Card>
                            </Col >
                        ))}
                    </Row>

                </div>
            </div>
        </div >


    );
}

export default Favorites