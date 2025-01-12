// sections/AboutSection.tsx
import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";

const AboutSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100vh",
        pt: 10,
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
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "50%",
            background: "linear-gradient(to bottom, black, transparent)",
            zIndex: 2,
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            backdropFilter: "blur(80px)",
            WebkitBackdropFilter: "blur(80px)",
          }}
        />
      </Box>

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          py: 4,
        }}
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          About Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          We are a passionate team dedicated to solving real-world problems.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
              <Typography variant="h6">Our Mission</Typography>
              <Typography>
                To make the world a better place through technology.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
              <Typography variant="h6">Our Vision</Typography>
              <Typography>
                Building the future, one solution at a time.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default AboutSection;
