import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import watogaImage from "../assets/Watoga.jpg";

const Navigation = () => {
  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "rgba(0, 143, 17, 0.5)", zIndex: 1000 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "80px",
        }}
      >
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
              gap: 1,
            }}
          >
            <img
              src={watogaImage}
              alt="Watoga"
              style={{
                height: "64px",
                width: "auto",
                objectFit: "contain",
              }}
            />
            Watoga
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: "white",
              height: "40px",
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
              height: "40px",
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
              height: "40px",
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
