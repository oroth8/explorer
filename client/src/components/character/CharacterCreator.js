import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export default function CharacterCreator() {
  return (
    <div className="row">
        <div class="col col-lg-4">
          <form>
            <label for="name">Character Name:</label><input type="text" id="name"/>
            <label for="age">Age:</label><input type="number" width=3 id="age" />            
          </form>
        </div>
        <div class="col col-lg-8">
          <div class="col">
            <img src="https://randomuser.me/api/portraits/women/9.jpg" />
          </div>
          <button id="change-portrait" />
        </div>
    </div>
);
}

