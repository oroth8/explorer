import React from "react";
import "./style.css";
import Axios from "axios";

const style={
  backgroundImage: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "auto"
  }
}


class BackgroundImage extends React.Component {
  state={
    src: "",
    title: "",
    copyright: "",
    explanation: ""

  }


  imageSearch=()=>{
    Axios.get(
      "https://api.nasa.gov/planetary/apod?api_key="+process.env.API_KEY).then(results =>{
        this.setState({
          src: results.data.url,
          title: results.data.title,
          copyright: results.data.copyright,
          explanation: results.data.explanation
        })
        });
      };

  
      
componentDidMount() {
        this.imageSearch();

      }
      
      render(){
        return (
      
          <img src={this.state.src} style={style.backgroundImage} alt={this.state.title}/>
      
        );}
  }



export default BackgroundImage;