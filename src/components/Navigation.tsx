import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#CF7500" }}>
      <Toolbar className="justify-between">
        <Typography
          variant="h5"
          component={Link}
          to="/"
          className="text-white no-underline"
          sx={{ backgroundColor: "#CF7500", color: "black" }}
        >
          Watoga
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/product">
            Product
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
