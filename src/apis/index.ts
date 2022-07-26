import { IssueItemType, SortIssueItemType } from "@types"
import { changeDateFormat } from "@utils"

export const asyncFetchIssues = async () => {
  try {
    const response = await fetch("/issues")
    const data = await response.json()

    if (data.message) throw data
    const sortData: SortIssueItemType[] = data
      .map((dataItem: IssueItemType) => {
        return {
          id: dataItem.id,
          number: dataItem.number,
          title: dataItem.title,
          created_at: changeDateFormat(dataItem.created_at),
          comments: dataItem.comments,
          user: {
            login: dataItem.user.login,
            avatar_url: dataItem.user.avatar_url,
          },
        }
      })
      .sort((prev: SortIssueItemType, next: SortIssueItemType) => {
        if (prev.comments > next.comments) return -1
        if (prev.comments < next.comments) return 1
        return 0
      })

    return sortData
  } catch (error) {
    throw error
  }
}
