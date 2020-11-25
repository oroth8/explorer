import React from "react";
// import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route} from "react-router-dom";







// Our main background output

function App(){


    return (
      <BackgroundImage />
      <CharacterCreator />
      <Router>
          <Route exact path="/" component={Level} />
          <Route exact path="/level" component={Level} />
    </Router>
    );

}

export default App;