import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Section from "./Section";

const faqs = [
  {
    question: "Do I need a team to participate?",
    answer: "You can participate solo or as part of a team. Teams can have up to 4 members.",
  },
  {
    question: "Is prior experience required?",
    answer: "Not at all! Beginners are welcome. The event is designed to be inclusive and educational.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes, mentors will be available throughout the event to guide and support you.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any essentials you need. Wi-Fi and power outlets will be provided.",
  },
  {
    question: "How are winners selected?",
    answer: "Projects will be judged based on creativity, functionality, and impact by a panel of experts.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <Box sx={{ py: 10, backgroundColor: "background.selection1" }}>
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ color: "text.primary", fontWeight: 1000 }}
          >
            FAQ
          </Typography>

          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                backgroundColor: "background.paper",
                color: "text.primary",
                mb: 2,
                borderRadius: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </Section>
  );
}