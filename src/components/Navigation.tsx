import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import watogaImage from "../assets/Watoga.jpg";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#008F11" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: "white",
              "&:hover": {
                color: "white",
              },
              display: "flex",
              alignItems: "center",
              gap: 1, // Adds space between image and text
            }}
          >
            <img
              src={watogaImage}
              alt="Watoga"
              style={{
                height: "32px", // Adjust this value to match your navbar height
                width: "auto",
                objectFit: "contain",
              }}
            />
            Watoga
          </Button>
        </div>
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: "white",
              "&:hover": {
                color: "white",
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              color: "white",
              "&:hover": {
                color: "white",
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/product"
            sx={{
              color: "white",
              "&:hover": {
                color: "white",
              },
            }}
          >
            Product
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
