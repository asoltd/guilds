import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { IconButton } from "@mui/material"
import { MutableRefObject } from "react"

interface ScrollRightProps {
  scrolledValue: number
  setScrolledValue: (value: number) => void
  refs: MutableRefObject<HTMLDivElement[]>
  containerRef: MutableRefObject<HTMLDivElement>
}

export function ScrollRight({
  scrolledValue,
  setScrolledValue,
  refs,
  containerRef,
}: ScrollRightProps) {
  const scrollRight = () => {
    if (scrolledValue < refs.current.length - 1) {
      setScrolledValue(scrolledValue + 1)
      const leftOffset = refs.current[1].offsetLeft - refs.current[0].offsetLeft
      containerRef.current.scrollLeft = leftOffset * (scrolledValue + 1)
    }
  }

  return (
    <IconButton
      size="large"
      sx={{ border: "1px solid", borderColor: "text.secondary" }}
      onClick={scrollRight}
      disabled={scrolledValue === refs.current.length - 1}
    >
      <ArrowForwardIcon />
    </IconButton>
  )
}
