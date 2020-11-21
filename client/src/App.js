import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import employees from "./employees.json";




const styles = {
  container: {
    borderStyle: "solid",
    borderWidth: "20px",
    borderColor: "#A37871",
    backgroundColor: "#F3D8C7"
  },
  li: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black"
  }
};

// Our main background output

class App extends Component {
  // Takes input from employees.json file and allows us to change it without having to reaccess data.
  state = {
    "employees": employees,
    "filteredEmployees": employees
  };

  // Filters the data so that only employs that work in a given location are shown.
  handleLocationChange= location=>{
    let array=[];
    if(location !== "all"){
      array=this.state.employees.filter(employee => employee.Region === location);
    }else{
      array=this.state.employees;
    }
    this.setState({ filteredEmployees: array });
  }

  // Sorts data by the option chosen by the user.
  handleSortChange= sortOption => {
    let array=[];
    array=this.state.filteredEmployees.sort((a, b) => {
      if (a[sortOption] < b[sortOption]) {
        return -1;
      }
      if (a[sortOption] > b[sortOption]) {
        return 1;
      }
    
      return 0;
    });

    this.setState({filteredEmployees: array});
  }

  // Send data to EmployeeList to be rendered, then renders final results.
  render() {
    return (
      <div className="container p-4 mr-auto ml-auto" style={styles.container}>
        <EmployeeList employees={this.state.filteredEmployees} locationChange={this.handleLocationChange} sortChange={this.handleSortChange}/>
      </div>
    );
  }
}

export default App;