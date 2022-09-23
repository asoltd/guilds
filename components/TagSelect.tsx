import styled from "styled-components"
import Select from "react-select"
import { Tag } from "storage/quest"
import { FieldProps } from "formik"

const MySelect = styled(Select)`
  margin-bottom: 2rem;
`

interface Option {
  value: Tag
  label: Tag
}

interface TagSelectProps extends FieldProps {
  options: Option[]
  isMulti: boolean
}

export default function TagSelect({
  field,
  form,
  options,
  isMulti,
}: TagSelectProps) {
  const onChange = (option: Option | Option[]) => {
    form.setFieldValue(
      field.name,
      (option as Option[]).map((item: Option) => item.value)
    )
  }

  const getValue = () => {
    if (options) {
      options.filter((option: Option) => field.value.indexOf(option.value) >= 0)
    } else {
      return []
    }
  }

  return (
    <MySelect
      name={field.name}
      options={options}
      isMulti={isMulti}
      onChange={onChange}
      value={getValue()}
    />
  )
}
