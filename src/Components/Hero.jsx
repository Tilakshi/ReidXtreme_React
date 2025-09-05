import { Box, Container, Typography, Button, Stack } from "@mui/material";
import Logo from './../Images/ReidXtreme.png';
import Section from "./Section";
import {Link} from "react-router-dom";

export default function Hero() {
  return (
    <Section>
        <Stack direction={"column"} spacing={5}>
        <Box
      id="hero"
      sx={{
        minHeight: { xs: "88vh", md: "92vh" },
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(135deg, #0A0A0F, #1E1E2F)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md" >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img src={Logo} width="300px" height="300px" alt="logo"/>
        </Box>
        
        <Typography variant="h1" sx={{ fontWeight: 800, mb: 2 }}>
          REIDEXtreme 
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
          — Build. Learn. Compete.
        </Typography>
        <Typography sx={{ opacity: 0.9, mb: 4 }} variant="h6">
          A high-energy challenge that brings developers together to create,
          innovate, and compete.
        </Typography>
        <Link to="/register">
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ width: "550px" , height:"60px"}}
                      >
                        Register
                      </Button>
                    </Link>
        {/* <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 4, py: 1.5 }}
        >
          Register Now
        </Button> */}
      </Container>
    </Box>
     </Stack>
    </Section>

    
     
    
  );
}
