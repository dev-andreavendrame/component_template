import "./App.css";
import { Box, Typography, Button } from "@mui/material";

import snowflake from "./assets/images/snowflake.png";
import flower from "./assets/images/flower.jpg";
function App() {
  return (
    <Box className="container">
      <img className="image-container" src={flower} alt="" />
      <Box className="avatar avatar-1"></Box>
      <Box className="avatar avatar-2"></Box>
      <Box className="description-div" style={{ paddingTop: "2em" }}>
        <Typography variant="h4" className="title">
          Product name
        </Typography>
        <Typography variant="h5" className="subtitle">
          10 available
        </Typography>

        <Box className="tips" style={{ marginTop: "4em" }}>
          <Typography variant="h4" className="title">
            333 TIPS
          </Typography>
          <img src={snowflake} className="snowflake" alt="" />
        </Box>
        <Button
          variant="contained"
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "0.8rem 0.5rem",
            fontSize: "2rem",
            fontWeight: "bolder",
			marginTop:"1rem"
          }}
          className="button"
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
}

export default App;
