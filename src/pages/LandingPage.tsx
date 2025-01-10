import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";

const LandingPage = () => {
  return (
    <Container className="py-8">
      <Typography variant="h2" className="mb-6">
        Welcome to Our Startup
      </Typography>
      <Typography variant="body1" className="mb-4">
        We're revolutionizing the way people do things.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/product"
      >
        Learn About Our Product
      </Button>
    </Container>
  );
};

export default LandingPage;
