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

interface Option {
  value: Tag
  label: Tag
}

interface TagSelectProps {
  options: Option[]
  selectedTags: string[]
  setSelectedTags: (tags: string[]) => void
}

export default function TagSelect({
  options,
  selectedTags,
  setSelectedTags,
}: TagSelectProps) {
  const handleChange = (event: SelectChangeEvent<typeof selectedTags>) => {
    const {
      target: { value },
    } = event
    setSelectedTags(typeof value === "string" ? value.split(",") : value)
  }
  return (
    <FormControl>
      <InputLabel>Tags</InputLabel>
      <Select
        multiple
        value={selectedTags}
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
