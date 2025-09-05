import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Section from "./Section";

const schedule = [
  { time: "09:00 AM", event: "Opening Ceremony" },
  { time: "10:00 AM", event: "Hackathon Begins" },
  { time: "01:00 PM", event: "Lunch Break" },
  { time: "05:00 PM", event: "Project Submission" },
  { time: "07:00 PM", event: "Closing & Awards" },
];

export default function Schedule() {
  return (
    <Section>
      <Box sx={{ py: 10, backgroundColor: "background.selection1" }}>
        <Container>
          <Typography variant="h2" align="center" gutterBottom sx={{ color: "text.primary", fontWeight: 1000, }}>
            Schedule
          </Typography>
           
          <List>
            {schedule.map((item, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={
                    <Typography
                      variant="h6"
                      sx={{ color: "text.primary", fontWeight: 600 }}
                    >
                      {item.event}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ color: "primary.main" }}>
                      {item.time}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </Section>
  );
}
