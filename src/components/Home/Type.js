import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Full Stack Develeloper",
          "Competitive Programmer",
          "Android App Developer",
          "iOS App Developer",
          "DSA",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
