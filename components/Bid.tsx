import { Bid } from "types/quest"

interface BidProps {
  value: Bid
}

export function Bid({ value }: BidProps): JSX.Element {
  const { timeEstimate, amount } = value
  return (
    <div>
      <div>Amount: {timeEstimate}</div>
      <div>Time estimate: {amount}</div>
    </div>
  )
}
