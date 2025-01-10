import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

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
            }}
          >
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
