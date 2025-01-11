// sections/HomeSection.tsx
import React from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import heroImage from "../assets/Hero.jpg";

interface HomeSectionProps {
  onProductClick: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

const HomeSection = React.forwardRef<HTMLDivElement, HomeSectionProps>(
  ({ onProductClick }, ref) => {
    return (
      <Box ref={ref} sx={{ position: "relative", minHeight: "100vh" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${heroImage})`,
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 2,
            },
          }}
        />

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
              backgroundColor: "rgba(0, 143, 17, 0.7)",
              padding: "12px 32px",
              fontSize: "1.1rem",
              "&:hover": {
                color: "white",
                backgroundColor: "#008F11",
              },
            }}
            variant="contained"
            onClick={onProductClick}
          >
            Learn About Our Product
          </Button>
        </Container>
      </Box>
    );
  }
);

export default HomeSection;
