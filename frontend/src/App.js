import React from 'react';
import './App.css';
import Search from "./components/search";
import Favorites from "./components/favorites";
import LandingPage from "./components/landing-page";
import { Route, Switch, BrowserRouter } from 'react-router-dom';




function App() {



  return (
    <div >
      <div></div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorites} />

        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
