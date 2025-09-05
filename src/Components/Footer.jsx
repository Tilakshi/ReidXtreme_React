import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "background.default", py: 6 }}>
      <Container>
        <Stack spacing={3} alignItems="center">
          <Typography
            variant="h6"
            sx={{ color: "primary.main", fontWeight: 700 }}
          >
            IEEE UCSC Events
          </Typography>

          <Stack direction="row" spacing={2}>
            <Link href="https://ucscieee.lk/" target="_blank" underline="hover" sx={{ color: "text.secondary" }}>
              IEEE UCSC SB
            </Link>
            <Link href="https://madhack.ucscieee.lk/" target="_blank" underline="hover" sx={{ color: "text.secondary" }}>
              MADHack
            </Link>
            <Link href="https://codequest.ucscieee.lk/" target="_blank" underline="hover" sx={{ color: "text.secondary" }}>
              CodeQuest
            </Link>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton href="https://github.com/ucscieee" target="_blank" sx={{ color: "text.secondary" }}>
              <GitHubIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "text.secondary" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "text.secondary" }}>
              <LinkedInIcon />
            </IconButton>
          </Stack>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} IEEE UCSC SB. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}