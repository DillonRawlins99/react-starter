import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box borderBottom={1}>
                <Link to="/">Support</Link>{" "}
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Backup</Box>
              <Box borderBottom={1}>
                <Link to="/">History</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
