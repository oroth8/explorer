import React, { useState, useEffect } from "react";
import "./style.css";

const style = {
  options: [
    {
      name: "Game Menu",
      href: "/play",
    },
    // {
    //   "name":"Create Character",
    //   "href":"/characterCreation"
    // },
    {
      name: "Main Menu",
      href: "/",
    },
    {
      name: "View Character",
      href: "/viewCharacter",
    },
    // ,{
    //   "name":"Buy Ship",
    //   "href":"/buyShip"
    // }
  ],
  card: {
    zIndex: "2",
    display: "block",
  },
  a: {
    color: "black",
  },
  list: {
    listStyle: "none",
  },
};

// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function Options(props) {
  const [displayOptions, setDisplayOptions] = useState({
    position: "fixed",
    top: "10%",
    left: "10%",
    maxWidth: "80%",
    zIndex: "2",
    display: "block",
  });

  useEffect(() => {
    if (props.displayed.display === "Options") {
      setDisplayOptions({ ...displayOptions, display: "block" });
    } else {
      setDisplayOptions({ ...displayOptions, display: "none" });
    }
    // eslint-disable-next-line
  }, [props.displayed]);

  return (
    <div
      className="card"
      style={displayOptions}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
      <div className="card-body">
        <ul style={style.list}>
          <h4>
            <strong> Options</strong>
          </h4>
          {style.options.map((option) => (
            <li>
              <a style={style.a} href={option.href}>
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Options;
