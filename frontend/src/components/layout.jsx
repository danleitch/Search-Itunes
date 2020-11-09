import React from 'react';
import '../App.css'
import { Card, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Layout(props) {


    return (

        <Col>
            <Card className="mb-5 ml-1 mr-1">
                <Card.Img variant="top" src={props.info.artworkUrl100.replace("100x100", "250x250")} />
                <Card.Body>
                    <Card.Title>{props.info.trackName}</Card.Title>
                    <Card.Text>{props.info.artistName}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {props.info.trackPrice &&
                        <small className="text-muted">Price {props.info.trackPrice}</small>
                    }
                    <br />
                    <Button variant="secondary" onClick={() => props.addToFav(props.info)}>Add to Favorites</Button>
                    <br />
                    <br />
                    {props.info.previewUrl &&
                        <button> <audio controls src={props.info.previewUrl} type="audio/mp4"></audio></button>
                    }
                    <br /><br />
                    {props.info.trackViewUrl &&

                        <a rel="noopener noreferrer" href={props.info.trackViewUrl} target="_blank" > <Button variant="warning">Click here</Button> </a>
                    }

                </Card.Footer>
            </Card>
        </Col >

    )
}

export default Layout