import React from 'react';
import { Home } from "./screens/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PokemonDetail } from './screens/PokemonDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/pokemon/:id/">
              {/* passing in all the state, because it's not good practice pass in parameters with link. however using the context to store the data would be a better approach for this */}
              <PokemonDetail/> 
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
