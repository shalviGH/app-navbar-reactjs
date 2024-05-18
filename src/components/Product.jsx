// import styled from "@emotion/styled";
import { Paper, Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

export default function Product() {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-between",
        gap: 2,
        overflow: "hidden",
        mt: 5,
      }}
    >
      <Img src="https://via.placeholder.com/200" alt="image example" />

      <Box sx={{ flexGrow: 1, display: "grid", gap: 2 }}>
        <Typography variant="h4">Product Name</Typography>
        <Typography variant="h5">Product Description</Typography>

        <Button variant="contained" color="success">
          Add card
        </Button>
      </Box>

      <Box sx={{ mr: 5 }}>$19.99</Box>
    </Paper>
  );
}
