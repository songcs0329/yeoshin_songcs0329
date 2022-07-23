import { ErrorLayer } from "./styles"

interface ErrorPagePropsType {
  errorMessage: string
}

const ErrorPage = ({ errorMessage }: ErrorPagePropsType) => {
  return (
    <ErrorLayer>
      <div>
        <h3>{errorMessage}</h3>
      </div>
    </ErrorLayer>
  )
}

export default ErrorPage
