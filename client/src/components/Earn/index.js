import React from "react";
import { Link } from "react-router-dom";
import GameNav from "../layout/GameNav";
import "./style.css";
import Wave from "../layout/Wave";
import Footer from "../layout/Footer";

function Earn({ categories }) {
  // Filter of categories prop for respective levels
  const level1 = categories.filter((category) => category.map === "level1");
  const level2 = categories.filter((category) => category.map === "level2");

  // Map to remove level information and leave only the location
  const level1Cat = level1.map(function (item) {
    return item["_id"];
  });
  const level2Cat = level2.map(function (item) {
    return item["_id"];
  });

  let url;
  let link;

  // Function that uses switch statement to assign URL and link for specific location
  const getImageUrls = (category) => {
    switch (category) {
      case "North America":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/330px-Location_North_America.svg.png";
        link = "/naquiz";
        break;
      case "South America":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/330px-South_America_%28orthographic_projection%29.svg.png";
        link = "/saquiz";
        break;
      case "Europe":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/330px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png";
        link = "/euquiz";
        break;
      case "Africa":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/330px-Africa_%28orthographic_projection%29.svg.png";
        link = "/afquiz";
        break;
      case "Asia":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/330px-Asia_%28orthographic_projection%29.svg.png";
        link = "/asquiz";
        break;
      case "Antarctica":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/330px-Antarctica_%28orthographic_projection%29.svg.png";
        link = "/anquiz";
        break;
      case "Australia":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Australia-New_Guinea_%28orthographic_projection%29.svg/330px-Australia-New_Guinea_%28orthographic_projection%29.svg.png";
        link = "/auquiz";
        break;
      case "Sun":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/330px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg";
        link = "/sunquiz";
        break;
      case "Mercury":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/330px-Mercury_in_color_-_Prockter07-edit1.jpg";
        link = "/merquiz";
        break;
      case "Venus":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/330px-PIA23791-Venus-NewlyProcessedView-20200608.jpg";
        link = "/venquiz";
        break;
      case "Earth":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/330px-The_Earth_seen_from_Apollo_17.jpg";
        link = "/earthquiz";
        break;
      case "Mars":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/330px-OSIRIS_Mars_true_color.jpg";
        link = "/marsquiz";
        break;
      case "Jupiter":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/330px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg";
        link = "/jupquiz";
        break;
      case "Saturn":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/4/45/Saturn_closeup.jpg";
        link = "/satquiz";
        break;
      case "Uranus":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/330px-Uranus2.jpg";
        link = "/urquiz";
        break;
      case "Neptune":
        url =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/330px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg";
        link = "/nepquiz";
        break;
      default:
        url = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
        link = "";
    }
  };

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
            <h1 className="pb-3">Level 1</h1>
          </div>
        </div>
        <Wave />
        // Map over the level 1 categories and render a card with image and link to quiz
        <div className="row row-cols-3 justify-content-center">
          {level1Cat.map((category) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
              {getImageUrls(category)}
              <Link to={link}>
                <div className="card">
                  <img alt={category} src={url} className="level1"></img>
                  <div className="card-body">
                    <span className="card-text">{category}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4">
            <h1 className="pb-3">Level 2</h1>
          </div>
        </div>
        <Wave />
        <div className="row row-cols-3 justify-content-center">
          // // Map over the level 2 categories and render a card with image and link to quiz
          {level2Cat.map((category) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 level2">
              {getImageUrls(category)}
              <Link to={link}>
                <div className="card">
                  <img alt={category} src={url}></img>
                  <div className="card-body">
                    <span className="card-text">{category}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <GameNav />
    </React.Fragment>
  );
}

export default Earn;
