import { LoadingEllipsis } from "./styles"

const Loading = () => {
  return (
    <LoadingEllipsis>
      <div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </LoadingEllipsis>
  )
}

export default Loading
