// App.tsx
import { useRef } from "react";
import { Typography, Button, Container, Box } from "@mui/material";
import Navigation from "./components/Navigation";
import heroImage from "./assets/Hero.jpg";
import "./App.css";

const App = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProductClick={() => scrollToSection(productRef)}
      />

      {/* Landing Section */}
      <Box ref={homeRef} sx={{ position: "relative", minHeight: "100vh" }}>
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
            onClick={() => scrollToSection(productRef)}
          >
            Learn About Our Product
          </Button>
        </Container>
      </Box>

      {/* About Section */}
      <Box ref={aboutRef} sx={{ minHeight: "100vh", pt: "80px" }}>
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
              <Typography>
                Building the future, one solution at a time.
              </Typography>
            </div>
          </Box>
        </Container>
      </Box>

      {/* Product Section */}
      <Box ref={productRef} sx={{ minHeight: "100vh", pt: "80px" }}>
        <Container className="py-8">
          <Typography variant="h3" className="mb-6">
            Our Product
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded">
              <Typography variant="h6" className="mb-2">
                Feature 1
              </Typography>
              <Typography>Amazing feature description goes here.</Typography>
            </div>
            <div className="p-4 border rounded">
              <Typography variant="h6" className="mb-2">
                Feature 2
              </Typography>
              <Typography>Another great feature description.</Typography>
            </div>
            <div className="p-4 border rounded">
              <Typography variant="h6" className="mb-2">
                Feature 3
              </Typography>
              <Typography>One more impressive feature detail.</Typography>
            </div>
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default App;
