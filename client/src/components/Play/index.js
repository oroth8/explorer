
import React from 'react';
import "./style.css";

const style={
  img: {
    width: "600px",
    maxWidth: "100%",
    height: "200px"
  }
}



function Play(props) {
        return (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/11572307115_1194957269_o.jpg" alt="Character"/>
                <div class="card-body">
                    <a href="/viewcharacter"><h5 class="card-text">Character Management</h5></a>
                </div>
                </div>
              </div>
            <div className="col-md-6 col-sm-12">
              <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/11572307115_1194957269_o.jpg" alt="Character"/>
                <div class="card-body">
                    <a href="/level"><h5 class="card-text">Explore and Learn</h5></a>
                </div>
              </div>
            </div>
          </div>

        );
  }




export default Play;
