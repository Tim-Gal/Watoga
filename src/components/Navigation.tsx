// Navigation.tsx
import { AppBar, Toolbar, Button } from "@mui/material";
import watogaImage from "../assets/Watoga.jpg";

interface NavigationProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onProductClick: () => void;
}

const Navigation = ({
  onHomeClick,
  onAboutClick,
  onProductClick,
}: NavigationProps) => {
  return (
    <AppBar
      position="fixed"
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
            onClick={onHomeClick}
            sx={{
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
            onClick={onHomeClick}
            sx={{
              height: "40px",
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={onAboutClick}
            sx={{
              height: "40px",
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            onClick={onProductClick}
            sx={{
              height: "40px",
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
