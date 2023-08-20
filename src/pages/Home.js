import React from "react";

const Home = () => {
  const mystyle = {
    border: "0px",
    overflow: "hidden",
    width: "500px",
    height: "500px",
  };
  return (
    <div>
      <iframe
        src="https://www.youtube.com/"
        frameborder="0"
        scrolling="no"
        marginwidth="0"
        marginheight="0"
        style={mystyle}
        allowtransparency="true"
      ></iframe>
    </div>
  );
};

export default Home;
