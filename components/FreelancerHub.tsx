import styled from "styled-components"
import Link from "next/link"
import { Box } from "@mui/material"

const Container = styled.div`
  width: 100%;
`

const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const NavItem = styled.a`
  font-size: 4rem;
  width: 25rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default function FreelancerHub(): JSX.Element {
  return (
    <Container>
      <Box>Freelancer Hub</Box>
      <Navigator>
        <Link href="/quests">
          <NavItem>Quests</NavItem>
        </Link>
        <Link href="/teams">
          <NavItem>Teams</NavItem>
        </Link>
        <Link href="/stats">
          <NavItem>Stats</NavItem>
        </Link>
        <Link href="/bounty">
          <NavItem>Bounty</NavItem>
        </Link>
      </Navigator>
    </Container>
  )
}
