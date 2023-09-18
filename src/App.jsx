import "./App.css";

import snowflake from "./assets/images/snowflake.png";
import flower from "./assets/images/flower.jpg";
function App() {
  return (
    <div className="container">
      <img className="image-container" src={flower} alt="" />
	  <div className="avatar avatar-1"></div>
	  <div className="avatar avatar-2"></div>
      <div className="description-div">
        <h1 className="title">Product name</h1>
        <h2 className="subtitle">10 available</h2>
        <div className="tips">
          <h1 className="title">333 TIPS</h1>
          <img src={snowflake} className="snowflake" alt="" />
        </div>
        <button className="button">Buy</button>
      </div>
    </div>
  );
}

export default App;
