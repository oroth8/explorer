import License from "../Character/components/License"
import React from 'react';






function Play() {
        return (
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="/viewcharacter"> <License /></a>
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
