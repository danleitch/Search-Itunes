import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function LandingPage() {

    return (
        <div className="home-screen-background" >
            <div className="home-screen-content">

                <div>
                    <div className="iSearch">
                        <span className="fa fa-apple"></span>
                        iSearch
					</div>
                </div >


                <div className="landing-page">
                    <br /><br /><br />
                    <div >
                        <span className="fa fa-apple"></span>
                         iSearch
					</div>
                    <br />
                    <p>A beautiful tool for searching iTunes</p>
                    <p>Look up any Music, Books, App or Podcast that you would like to view</p>
                    <p>Then save them in your favorites</p>


                    <Link to="/search">   <Button variant="danger" size="lg" >Start Searching</Button> </Link>
                </div>
                <footer className="footer_wrap">
                    <div className="footer_note">
                        A open Source project made with <span className="fa fa-heart"></span>  by <a href="https://github.com/Thunder-Chief" > Daniel Leitch</a>.This is just a project - All Apple logos & names are part of Apple Inc.
					</div>
                </footer>


            </div>
        </div>
    );
}

export default LandingPage