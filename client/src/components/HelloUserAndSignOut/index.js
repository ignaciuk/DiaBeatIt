import React from "react";
import "./helloUserAndSignOut.css";

var userName = localStorage.getItem("username");

class HelloUserAndSignOut extends React.Component {

  signOut = () => {
    window.open("https://www.google.com");
  }

  render() {
    return(
      <div>             
        <div className="helloUserTxt">Hello <span className="userFirstName">{userName}</span>!</div>
        {/* <p className="signOutAnchor" href="https://www.nutritionix.com/uk/database/common-foods" target="_blank">Click here to look up calories</p> */}
        <div data-test="sign-out-button" className="signOutContainer"><span className="signOutAnchor" onClick={this.signOut}>Sign Out</span></div>
      </div>   
    )
  }
}

export default HelloUserAndSignOut;