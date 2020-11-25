import React from "react";
import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route} from "react-router-dom";
import CharacterCreator from "./components/character/CharacterCreator"

// Our main background output

function App(){


    return (
      <div className="container">
        <BackgroundImage />
        <Router>
            <Route exact path="/" component={Level} />
            <Route exact path="/characterCreation" component={CharacterCreator} />
            <Route exact path="/level" component={Level} />
      </Router>
    </div>
    );

}

export default App;