import Teams from "components/Teams"
import styled from "styled-components"

const Title = styled.div`
  font-size: 100px;
  margin-bottom: 100px;
`

export default function TeamsPage(): JSX.Element {
  return (
    <div>
      <Title>Teams</Title>
      <Teams />
    </div>
  )
}
