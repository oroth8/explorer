
import React from 'react';
import "./style.css";

const style={
  img: {
    width: "90%",
    height: "auto"
  }
}


// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Play(props) {
        return (
          <div className="row">
            <div className="col-md-6 col-sm-12">
                <a href="/charactercreation"><h4>View Character</h4><img style={style.img} src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/11572307115_1194957269_o.jpg" alt="Character"/></a>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="row">
                  <a href="/level"><h4>Explore and Learn </h4><img style={style.img} src="/img/levelimgs/lvl1.jpg" alt="Level Choice"/></a>
                </div>
                <div className="row">
                <a href="/ship"><h4>Manage Ship</h4><img style={style.img} src="/img/avatar.png" alt="Ship"/></a>
                </div>
            </div>
          </div>

        );
  }




export default Play;
