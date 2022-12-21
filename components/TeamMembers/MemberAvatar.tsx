import styled from "@emotion/styled"
import { doc } from "firebase/firestore"
import { useFirestore, useFirestoreDocData, StorageImage } from "reactfire"

const MemberIcon = styled(StorageImage)({
  objectFit: "cover",
  height: "1.5rem",
  width: "1.5rem",
  borderRadius: "50%",
})

interface MemberAvatarProps {
  memberId: string
}

export function MemberAvatar({ memberId }: MemberAvatarProps) {
  const firestore = useFirestore()
  const memberRef = doc(firestore, `heroes/${memberId}`)
  const { data: member, status } = useFirestoreDocData(memberRef)

  if (status == "loading") {
    return null
  } else {
    return <MemberIcon storagePath={`general/${member.profilePicture}`} />
  }
}
