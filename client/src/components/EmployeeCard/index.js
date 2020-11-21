import React from "react";
import "./style.css";
// css for image
const styles={
  img: {
    width: "100%",
    height: "auto"
  }
}
// Takes information from employee list and renders it nicely, including a picture (only 2 pictures to choose from, one male one female) give the full name (first middle initial last), email, location and time at company.
function FriendCard(props) {
  return (
    <div className="row m-2">
      <img className="col-md-2 col-sm-4" style={styles.img} alt={props.employee.Gender} src={"./"+ props.employee.Gender+".jpg"} />
      <div className="col-10">

      <div className="row">
          <p className="col-md-5 col-sm-4"><strong>Name:</strong> {props.employee[`First Name`]} {props.employee[`Middle Initial`]} {props.employee[`Last Name`]}</p>
          <p className="col-md-5 col-sm-4">
            <strong>Email:</strong> {props.employee[`E Mail`]} </p> 
          <p className="col-md-5 col-sm-4">
            <strong>Location:</strong> {props.employee.Region} </p>
          <p className="col-md-5 col-sm-4">
            <strong>Time at Company:</strong> {props.employee[`Age in Company (Years)`]} </p>
          
      </div>
    </div>
    </div>
  );
}

export default FriendCard;
