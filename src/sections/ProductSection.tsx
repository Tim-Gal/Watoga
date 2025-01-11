// sections/ProductSection.tsx
import React from "react";
import { Typography, Container, Box } from "@mui/material";

const ProductSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box ref={ref} sx={{ minHeight: "100vh", pt: "80px" }}>
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
  );
});

export default ProductSection;
