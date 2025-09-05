import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import Section from "./Section";

const prizes = [
  {
    title: "🏅 First Place",
    reward: "LKR 100,000 + Trophy + Certificate",
  },
  {
    title: "🥈 Second Place",
    reward: "LKR 50,000 + Certificate",
  },
  {
    title: "🥉 Third Place",
    reward: "LKR 25,000 + Certificate",
  },
  {
    title: "🎖️ Special Mentions",
    reward: "Swag Packs + Certificate",
  },
];

export default function Prizes() {
  return (
    <Section>
      <Box sx={{ py: 10, backgroundColor: "background.default" }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ color: "text.primary", fontWeight: 1000 }}
          >
            Prizes
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {prizes.map((prize, index) => (
                <Section>
                    <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    borderRadius: 4,
                    boxShadow: 3,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ color: "primary.main", fontWeight: 700 }}
                      gutterBottom
                    >
                      {prize.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {prize.reward}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
                </Section>
              
            ))}
          </Grid>
        </Container>
      </Box>
    </Section>
  );
}