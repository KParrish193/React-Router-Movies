import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Router>    
    
        <SavedList list={savedList} />
        <Switch>  
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route  path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
