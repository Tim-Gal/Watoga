// sections/AboutSection.tsx
import React from "react";
import { Typography, Container, Box } from "@mui/material";

const AboutSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: "80px",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div
          className="blur-gradient"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "60%",
            background: "linear-gradient(to bottom, black, transparent)", // Added gradient
            zIndex: 2,
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            backdropFilter: "blur(80px)", // Increased from 40px to 80px
            WebkitBackdropFilter: "blur(80px)", // Increased from 40px to 80px
          }}
        />
      </Box>

      <Container
        className="py-8"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
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
            <Typography>
              Building the future, one solution at a time.
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
});

export default AboutSection;
