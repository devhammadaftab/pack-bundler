import "./App.css"

import React, { useState } from "react";

import Bundle from "./Components/SelectedBundle/Bundle";
import Section from "./Components/SectionComponent/section";
import siteData from "./Data/Data";

function App() {
  const [myIcons, setMyIcons] = useState([]);
  return (
      <div className="main">
        <Section dataWrapper={siteData} myIcons={myIcons} setMyIcons={setMyIcons} />
        <Bundle myIcons={myIcons} setMyIcons={setMyIcons} />
      </div>
  );
}

export default App;
