import License from "../Character/components/MenuLicense";
import Ship from "../Character/components/Ship";
import Level from "../Character/components/Level";
import Quiz from "../Character/components/Quiz";
import CharacterContext from "../../context/character/CharacterContext";
import React, {useContext} from 'react';
import "./style.css";

// const style = {
//   img: {
//     width: "80%",
//     height: "auto"
//   }
// }


function Play({ questions }) {
  const characterContext = useContext(CharacterContext);
  let charText="View Character";
  if(characterContext.missing) charText="Create Character"

        return (
          <div>
          <div className="row mb-4">
          <div className="col-md-6 col-sm-12">
              <a href="/viewCharacter"><License/></a>
          </div>


          <div className="col-md-6 col-sm-12">
            <a href="/level"><Level /></a>
          </div>
          </div>

          <div className="row mb-4">
          <div className="col-md-6 col-sm-12">
            <a href="/ship"><Ship /></a>
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="/earn"><Quiz /></a>
          </div>

          </div>
          </div>



        );
  }

export default Play;
