import { Container } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container style={{ padding: "2rem" }}>{children}</Container>
      <Footer />
    </>
  );
}
