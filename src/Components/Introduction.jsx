import { Box, Container, Typography, Paper } from "@mui/material";
import Section from "./Section";

export default function Introduction() {
  return (
    <Section>
        <Box sx={{ py: 10, backgroundColor: "background.default" }}>
      <Container maxWidth="md">
        <Paper sx={{ p: 4, borderRadius: 3, backgroundColor: "background.paper" }}>
          <Typography variant="h4" gutterBottom>
            About REIDExtreme
          </Typography>
          <Typography>
            REIDExtreme is a hackathon organized by IEEE UCSC to bring together students and developers in a collaborative environment. The event provides a platform to explore new technologies, share knowledge, and work on practical solutions to real-world problems.

Participants will have the opportunity to:

Build innovative projects within a focused timeframe.

Learn and apply modern tools, frameworks, and techniques.

Work in teams, combining creativity with technical skills.

Present their ideas to peers, mentors, and industry professionals.

More than a competition, REIDExtreme encourages learning, teamwork, and problem-solving while giving participants the space to showcase their talent and creativity.
          </Typography>
        </Paper>
      </Container>
    </Box>
    </Section>
    
  );
}
