// sections/ProductSection.tsx
import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";

const ProductSection = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box ref={ref} sx={{ height: "100vh", pt: 10 }}>
      <Container sx={{ py: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>
          Our Product
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ p: 2, border: 1, borderColor: "grey.300", borderRadius: 1 }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Feature 1
              </Typography>
              <Typography>Amazing feature description goes here.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ p: 2, border: 1, borderColor: "grey.300", borderRadius: 1 }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Feature 2
              </Typography>
              <Typography>Another great feature description.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{ p: 2, border: 1, borderColor: "grey.300", borderRadius: 1 }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Feature 3
              </Typography>
              <Typography>One more impressive feature detail.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
});

export default ProductSection;
