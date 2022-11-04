import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

export interface FAQProps {
  question: string
  answer: string
}

export function FAQ({ question, answer }: FAQProps) {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="text.secondary">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
