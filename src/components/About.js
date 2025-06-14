import React from "react";
import UserClass from "./userClass";
import UserContext from "../utils/UserContext";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <div>
        LoggedIn User
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-xl font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2>This is React</h2>
      <UserClass name={"Prachi Arora"} location={"Ujjain"} />
    </div>
  );
};

export default About;
