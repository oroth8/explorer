import React from "react";

function Earn(props) {
    console.log(props);
    return(
        <div>
            <p>Level 1</p>
            <div className="row">
                <div className="col-3">
                    <a href="/naquiz"><p>North America</p></a>
                </div>
                <div className="col-3">
                    <a href="/saquiz"><p>South America</p></a>
                </div>
                <div className="col-3">
                    <a href="/euquiz"><p>Europe</p></a>
                </div>
                <div className="col-3">
                    <a href="/asquiz"><p>Asia</p></a>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <a href="/afquiz"><p>Africa</p></a>
                </div>
                <div className="col-3">
                    <a href="/auquiz"><p>Australia</p></a>
                </div>
                <div className="col-3">
                    <a href="/anquiz"><p>Antarctica</p></a>
                </div>
            </div>
            <p>Level 2</p>
            <div className="row">
                <div className="col-3">
                    <a ><p>Sun</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Mercury</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Venus</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Earth</p></a>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <a ><p>Mars</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Jupiter</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Saturn</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Uranus</p></a>
                </div>
                <div className="col-3">
                    <a ><p>Neptune</p></a>
                </div>
            </div>
        </div>
    )
}

export default Earn;