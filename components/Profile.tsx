import { useAuth, useUser } from "reactfire"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

export default function Profile() {
  const { data: user } = useUser()
  const auth = useAuth()

  return (
    <Container>
      {user?.uid ? (
        <div>
          <div>{user.email}</div>
          <div onClick={() => auth.signOut()}>logout</div>
        </div>
      ) : (
        <div>err</div>
      )}
    </Container>
  )
}
