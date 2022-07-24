import { SortIssueItemType } from "@types"
import IssueItem from "@components/IssueItem"
import { IssuesListContainer, IssuesListWrapper } from "./styles"

interface IssuesListPropsType {
  issuesList: [] | SortIssueItemType[]
}

const IssusesList = ({ issuesList }: IssuesListPropsType) => {
  return (
    <IssuesListContainer>
      <IssuesListWrapper>
        <h3>Github Issues</h3>
        <ol className="issues_list">
          {issuesList.map((issueItem) => {
            return <IssueItem key={issueItem.number} issueItem={issueItem} />
          })}
        </ol>
      </IssuesListWrapper>
    </IssuesListContainer>
  )
}

export default IssusesList
