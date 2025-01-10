import { Typography, Container, Box } from "@mui/material";

const AboutPage = () => {
  return (
    <Container className="py-8">
      <Typography variant="h3" className="mb-6">
        About Us
      </Typography>
      <Typography variant="body1" className="mb-4">
        We are a passionate team dedicated to solving real-world problems.
      </Typography>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 rounded">
          <Typography variant="h6">Our Mission</Typography>
          <Typography>
            To make the world a better place through technology.
          </Typography>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          <Typography variant="h6">Our Vision</Typography>
          <Typography>Building the future, one solution at a time.</Typography>
        </div>
      </Box>
    </Container>
  );
};

export default AboutPage;
