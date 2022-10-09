import { Tag } from "storage/quest"
import { FieldProps } from "formik"
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"

interface Option {
  value: Tag
  label: Tag
}

interface TagSelectProps extends FieldProps {
  options: Option[]
  isMulti: boolean
}

export default function TagSelect({ options }: TagSelectProps) {
  const [tags, setTags] = useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event
    setTags(typeof value === "string" ? value.split(",") : value)
  }
  return (
    <FormControl>
      <InputLabel>Tags</InputLabel>
      <Select
        multiple
        value={tags}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
      >
        {options.map((option: Option, idx) => (
          <MenuItem key={idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
