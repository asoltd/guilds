import { useSigninCheck } from "reactfire";
import { CircularProgress } from "@mui/material";

export function Error() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <CircularProgress size={20} sx={{ color: "white" }} />
  } else {
    return <>
      {signInCheckResult.signedIn ? (
        <p>Sorry, you are not authorized to view this page.</p>
      ) : (
        <p>Sorry, you must be signed in to view this page.</p>
      )}
    </>
  }
}
