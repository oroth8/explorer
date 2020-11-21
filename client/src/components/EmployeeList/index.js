import React from "react";
import "./style.css";
import EmployeeCard from "../EmployeeCard";
// css for page
const styles = {
  h1:{
    textAlign: "center",
  },
  container: {
    borderStyle: "solid",
    borderWidth: "20px",
    borderColor: "#A37871",
    backgroundColor: "#F3D8C7"
  },
  li: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
    overflow: "hidden"
  }
};

// creates the content that will be rendered in App.js
function EmployeeList(props) {
  return (
    <React.Fragment>
      {/* Title */}
      <h1 style={styles.h1}> List of Employees</h1>
    {/* Dropdown selector for the location of workers */}
    <div className="row">
      <div className="col-lg-2 col-sm-0"></div>
    <div className="form-group col-lg-4 col-md-6 col-sm-12">
    <label >Find Employees At Location</label>
    <select className="form-control" id="location" onChange={e => props.locationChange(e.target.value)}>
      <option value="all">Choose a location</option>
      <option value="West">West</option>
      <option value="South">South</option>
      <option value="Midwest">Midwest</option>
      <option value="Northeast">Northeast</option>
    </select>
  </div>
  {/* Drop down menu for sort options */}
  <div className="form-group col-lg-4 col-md-6 col-sm-12">
    <label >Sort Employees By</label>
    <select className="form-control" id="sort" onChange={e => props.sortChange(e.target.value)}>
      <option value="Emp ID">Choose an option</option>
      <option value="First Name">First Name</option>
      <option value="Last Name">Last Name</option>
      <option value="Age in Company (Years)">Time at Company</option>
    </select>
  </div>
  <div className="col-md-2 col-sm-0"></div>
  </div>
      {/* Creates a list (unstyled) and send information to EmployeeCard in order to render each card. */}
      <ul className="list-unstyled ml-2 mr-2">
        {props.employees.map(employee =>
          <li style={styles.li}><EmployeeCard employee={employee} /></li>
        )}
      </ul>
      
    </React.Fragment>
  );
}

export default EmployeeList;
