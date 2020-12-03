import React from "react";
import { Link } from "react-router-dom";
import GameNav from "../layout/GameNav";
import "./style.css";
import Wave from "../layout/Wave";

function Earn(props) {
  console.log(props);
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Earn Money!</h1>
          <span>Test your knowledge to earn credits!</span>
        </div>
      </div>
      <div className="container-fluid quizzes">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <h1>Level 1</h1>
          </div>
        </div>
        <Wave />
        <div className="row row-cols-3 justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/naquiz">
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/330px-Location_North_America.svg.png"
                  alt="North America"
                  className="level1"
                />
                <div className="card-body">
                  <span className="card-text">North America</span>
                </div>
              </div>
            </Link>
          </div>
         
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/saquiz">
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/330px-South_America_%28orthographic_projection%29.svg.png"
                  alt="South America"
                  className="level1"
                />
                <div className="card-body">
                  <span className="card-text">South America</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/euquiz">
              <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/330px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png" 
                alt="Europe"
                className="level1"/>
                <div className="card-body">
                  <span className="card-text">Europe</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/asquiz">
              <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/330px-Asia_%28orthographic_projection%29.svg.png" className="level1" alt="Asia"/>
                <div className="card-body">
                  <span className="card-text">Asia</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/afquiz">
              <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/330px-Africa_%28orthographic_projection%29.svg.png" className="level1" alt="Africa" />
                <div className="card-body">
                  <span className="card-text">Africa</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/auquiz">
              <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Australia-New_Guinea_%28orthographic_projection%29.svg/330px-Australia-New_Guinea_%28orthographic_projection%29.svg.png" className="level1" alt="Australia"/>
                <div className="card-body">
                  <span className="card-text">Australia</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/anquiz">
              <div className="card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/330px-Antarctica_%28orthographic_projection%29.svg.png" className="level1"
                alt="Antarctica" />
                <div className="card-body">
                  <span className="card-text">Antarctica</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Level 2</h1>
          </div>
        </div>
        <Wave />
        <div className="row row-cols-3">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/sunquiz">
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819-02.jpg/512px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819-02.jpg"
                  className="p-0 m-0"
                  alt="Sun"
                />
                <div className="card-body">
                  <span className="card-text">Sun</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/merquiz">
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/330px-Mercury_in_color_-_Prockter07-edit1.jpg"
                  className="p-0 m-0"
                  alt="Mercury"
                />
                <div className="card-body">
                  <span className="card-text">Mercury</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <Link to="/venquiz">
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/330px-PIA23791-Venus-NewlyProcessedView-20200608.jpg"
                  className="p-0 m-0"
                  alt="Venus"
                />
                <div className="card-body">
                  <span className="card-text">Venus</span>
                </div>
              </div>
            </Link>
          </div>

          
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <Link to="/earthquiz">
                <div className="card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/330px-The_Earth_seen_from_Apollo_17.jpg"
                    className="p-0 m-0"
                    alt="Earth"
                  />
                  <div className="card-body">
                    <span className="card-text">Earth</span>
                  </div>
                </div>
              </Link>
            </div>
            
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <Link to="/marsquiz">
                  <div className="card">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/330px-OSIRIS_Mars_true_color.jpg"
                      className="p-0 m-0"
                      alt="Mars"
                    />
                    <div className="card-body">
                      <span className="card-text">Mars</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <Link to="/jupquiz">
                  <div className="card">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/330px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
                      className="p-0 m-0"
                      alt="Jupiter"
                    />
                    <div className="card-body">
                      <span className="card-text">Jupiter</span>
                    </div>
                  </div>
                </Link>
              </div>
            
            
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <Link to="/satquiz">
                  <div className="card">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/45/Saturn_closeup.jpg"
                      className="p-0 m-0"
                      alt="Saturn"
                    />
                    <div className="card-body">
                      <span className="card-text">Saturn</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <Link to="/urquiz">
                  <div className="card">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/330px-Uranus2.jpg"
                      className="p-0 m-0"
                      alt="Uranus"
                    />
                    <div className="card-body">
                      <span className="card-text">Uranus</span>
                    </div>
                  </div>
                </Link>
              </div>
           
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              <Link to="/nepquiz">
                <div className="card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/330px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"
                    className="p-0 m-0"
                    alt="Neptune"
                  />
                  <div className="card-body">
                    <span className="card-text">Neptune</span>
                  </div>
                </div>
              </Link>
            </div>
          
        </div>
      </div>

      <GameNav />
    </React.Fragment>
  );
}

export default Earn;
