import styled from "styled-components"
import Link from "next/link"

const Container = styled.div`
  width: 100%;
`

const Title = styled.div`
  font-size: 100px;
  text-align: center;
`

const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const NavItem = styled.a`
  font-size: 50px;
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default function FreelancerHub(): JSX.Element {
  return (
    <Container>
      <Title>Freelancer Hub</Title>
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
