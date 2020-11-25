import React from "react";
// import BackgroundImage from "./components/BackgroundImage";
import Level from "./components/Level";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Quiz from "./components/Quiz";







// Our main background output

function App(){



  // Send data to EmployeeList to be rendered, then renders final results.
    return (
      <Router>
          <Route exact path="/" component={Level} />
          <Route exact path="/level" component={Level} />
          <Route exact path="/quiz" component={Quiz} />
    </Router>
    );

}

export default App;