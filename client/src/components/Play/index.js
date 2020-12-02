import License from "../Character/components/License"
<<<<<<< HEAD
import React from 'react';
=======
import CharacterContext from "../../context/character/CharacterContext"
import React, {useContext} from 'react';
import "./style.css";
>>>>>>> main



function Play(props) {  
  const characterContext = useContext(CharacterContext);
  let charText="View Character";
  if(characterContext.missing) charText="Create Character"

        return (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="row">
        <a href="/viewcharacter"><h4>{charText}</h4>
                  <License />
                </a>
              </div>
            </div>


            <div className="col-md-6 col-sm-12">
              <div className="card" >
                <img className="card-img-top" src="/img/levelimgs/lvl1.jpg" alt="Character"/>
                <div className="card-body">
                    <a href="/level"><h5 className="card-text">Explore and Learn</h5></a>
                </div>
              </div>
            </div>      
             
     

          </div>




        );
  }




export default Play;
