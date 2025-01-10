import { Link } from "react-router-dom";
import { Typography, Button, Container, Box } from "@mui/material";
import heroImage from "../assets/Hero_Image.jpg"; // Import the image

const LandingPage = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Hero Image Section */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroImage})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
            zIndex: 2,
          },
        }}
      />

      {/* Content Section */}
      <Container
        sx={{
          position: "relative",
          zIndex: 3,
          paddingTop: "120px",
          paddingBottom: "120px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            marginBottom: "24px",
            fontWeight: "bold",
          }}
        >
          Watoga
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "white",
            marginBottom: "32px",
            maxWidth: "600px",
          }}
        >
          Optimizing fragmentation, reducing Drill & Blast costs
        </Typography>
        <Button
          sx={{
            backgroundColor: "#CF7500",
            padding: "12px 32px",
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: "#B66600",
            },
          }}
          variant="contained"
          component={Link}
          to="/product"
        >
          Learn About Our Product
        </Button>
      </Container>
    </Box>
  );
};

export default LandingPage;
