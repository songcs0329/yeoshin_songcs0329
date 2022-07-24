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
          number: dataItem.number,
          title: dataItem.title,
          createdAt: changeDateFormat(dataItem.created_at),
          comments: dataItem.comments,
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
