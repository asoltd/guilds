import { Stack, Container, Typography, Box } from "@mui/material"
import { FAQ, type FAQProps } from "./FAQ"
import { StillHaveQuestions } from "./StillHaveQuestions"

export function FAQs() {
  const faqs: Array<FAQProps> = [
    {
      question: "How much experience do I need?",
      answer: "None! We welcome all levels of experience.",
    },
    {
      question: "What if I don't have a team?",
      answer: "We will help you find a team.",
    },
    {
      question: "Is there a cost to sign up?",
      answer: "Nope! It's free to sign up.",
    },
    {
      question: "How does bidding work?",
      answer: "You bid on projects and the highest bidder wins.",
    },
    {
      question: "How do I get paid?",
      answer: "We will pay you through PayPal, Crypto, or Bank Transfer.",
    },
  ]
  return (
    <Container sx={{ mt: 4, p: 3 }}>
      <Stack alignItems="center">
        <Typography variant="h3">Frequently Asked Questions</Typography>
        <Typography variant="h5">
          Everything you need to know about Guilds to get started
        </Typography>
      </Stack>
      <Box sx={{ maxWidth: "md", m: "auto", mt: 3, mb: 3 }}>
        {faqs.map((faq, index) => (
          <FAQ key={index} question={faq.question} answer={faq.answer} />
        ))}
      </Box>
      <Box sx={{ mt: 8, mb: 8 }}>
        <StillHaveQuestions />
      </Box>
    </Container>
  )
}
