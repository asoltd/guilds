import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { IconButton } from "@mui/material"
import { MutableRefObject } from "react"

interface ScrollLeftProps {
  scrolledValue: number
  setScrolledValue: (value: number) => void
  refs: MutableRefObject<HTMLDivElement[]>
  containerRef: MutableRefObject<HTMLDivElement>
}

export function ScrollLeft({
  scrolledValue,
  setScrolledValue,
  refs,
  containerRef,
}: ScrollLeftProps) {
  const scrollLeft = () => {
    if (scrolledValue > 0) {
      setScrolledValue(scrolledValue - 1)
      const leftOffset = refs.current[1].offsetLeft - refs.current[0].offsetLeft
      containerRef.current.scrollLeft = leftOffset * (scrolledValue - 1)
    }
  }

  return (
    <IconButton
      size="large"
      sx={{ border: "1px solid", borderColor: "text.secondary" }}
      onClick={scrollLeft}
      disabled={scrolledValue === 0}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}
