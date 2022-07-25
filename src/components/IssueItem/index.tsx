import { SortIssueItemType } from "@types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons"
import { IssueItemBalloon, IssueItemUser } from "./styles"

export interface IssueItemPropsType {
  issueItem: SortIssueItemType
}

const IssueItem = ({ issueItem }: IssueItemPropsType) => {
  return (
    <li>
      <IssueItemUser>
        <span className="img">
          {issueItem.user.avatar_url ? (
            <img src={issueItem.user.avatar_url} alt={issueItem.user.login} />
          ) : (
            <i className="none" />
          )}
        </span>
        <strong className="user_name">{issueItem.user.login}</strong>
      </IssueItemUser>
      <IssueItemBalloon>
        <div>
          <span className="issue_number">#{issueItem.number}</span>
          <strong className="issue_title">{issueItem.title}</strong>
          <div className="issue_info">
            <div className="issue_created">
              <FontAwesomeIcon icon={faCalendar} />
              <span>{String(issueItem.created_at)}</span>
            </div>
            <div className="issue_comments">
              <FontAwesomeIcon icon={faComment} />
              <span>{issueItem.comments}</span>
            </div>
          </div>
        </div>
      </IssueItemBalloon>
    </li>
  )
}

export default IssueItem
