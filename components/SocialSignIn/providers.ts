import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth"

export const providers = [
  {
    provider: new GoogleAuthProvider(),
    image: "/GoogleIcon.svg",
    bgcolor: "#FFFFFF",
  },
  {
    provider: new TwitterAuthProvider(),
    image: "/TwitterIconWhite.svg",
    bgcolor: "#1DA1F2",
  },
  {
    provider: new GithubAuthProvider(),
    image: "/GithubIconWhite.svg",
    bgcolor: "#000000",
  },
  {
    provider: new FacebookAuthProvider(),
    image: "/FacebookIcon.svg",
    bgcolor: "#4267B2",
  },
]
