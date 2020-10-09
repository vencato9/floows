import React from "react";
import "./styles.css";

import Welcome from "../../components/Welcome";
// import Projects from "../../components/Projects";
// import WhatWeDo from "../../components/WhatWeDo";
// import WhoWeAre from "../../components/WhoWeAre";
// import Contact from "../../components/Contact";

function Home() {
  return (
    <div className="container">
      <Welcome />
      {/* <Projects />
      <WhatWeDo />
      <WhoWeAre />
      <Contact /> */}
    </div>
  );
}

export default Home;
