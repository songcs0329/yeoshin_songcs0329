import { SortIssueItemType } from "@types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IssueItemDesc } from "./styles"
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons"

export interface IssueItemPropsType {
  issueItem: SortIssueItemType
}

const IssueItem = ({ issueItem }: IssueItemPropsType) => {
  return (
    <li>
      <IssueItemDesc>
        <span className="issue_number">#{issueItem.number}</span>
        <strong className="issue_title">{issueItem.title}</strong>
        <div className="issue_info">
          <div className="issue_created">
            <FontAwesomeIcon icon={faCalendar} />
            <span>{String(issueItem.createdAt)}</span>
          </div>
          <div className="issue_comments">
            <FontAwesomeIcon icon={faComment} />
            <span>{issueItem.comments}</span>
          </div>
        </div>
      </IssueItemDesc>
    </li>
  )
}

export default IssueItem
