import { IconButton, Stack } from "@mui/material"
import Image from "next/image"

export default function TextIcons({ fontStyle, setFontStyle, text, setText }) {
  const icons = [
    {
      image: "/messageIcons/bold.svg",
      alt: "bold",
      size: {
        width: 14,
        height: 14,
      },
      onClick: () => {
        setText(text + "**")
      },
    },
    {
      image: "/messageIcons/italic.svg",
      alt: "italic",
      size: {
        width: 14,
        height: 14,
      },
      onClick: () => {
        setText(text + "*")
      },
    },
    {
      image: "/messageIcons/font-larger.svg",
      alt: "font-larger",
      size: {
        width: 15,
        height: 15,
      },
      onClick: () =>
        setFontStyle({ ...fontStyle, fontSize: fontStyle.fontSize + 2 }),
    },
    {
      image: "/messageIcons/font-smaller.svg",
      alt: "font-smaller",
      size: {
        width: 12,
        height: 12,
      },
      onClick: () =>
        setFontStyle({ ...fontStyle, fontSize: fontStyle.fontSize - 2 }),
    },
    {
      image: "/messageIcons/quote.svg",
      alt: "quote",
      size: {
        width: 15,
        height: 15,
      },
    },
    {
      image: "/messageIcons/pin.svg",
      alt: "pin",
      size: {
        width: 15,
        height: 15,
      },
    },
    {
      image: "/messageIcons/image.svg",
      alt: "image",
      size: {
        width: 15,
        height: 15,
      },
    },
    {
      image: "/messageIcons/list-point.svg",
      alt: "list-point",
      size: {
        width: 15,
        height: 15,
      },
    },
    {
      image: "/messageIcons/list-number.svg",
      alt: "list-number",
      size: {
        width: 15,
        height: 15,
      },
    },
  ]

  return (
    <Stack direction="row" spacing={0.5}>
      {icons.map((icon) => (
        <IconButton key={icon.alt} onClick={icon.onClick}>
          <Image src={icon.image} alt={icon.alt} {...icon.size} />
        </IconButton>
      ))}
    </Stack>
  )
}
